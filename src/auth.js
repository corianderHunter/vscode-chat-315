const vscode = require('vscode');
const os = require('os');
const { registerUser, profileUser } = require('./service');
const { setUserInfo, getUserInfo, user } = require('./global');
const socket = require('./socket')

const profile = () => {
    const { _id } = user();
    return profileUser(_id)
        .then(v => {
            setUserInfo(v.user);
        })
        .catch(e => {
            setUserInfo(null);
            vscode.window.showErrorMessage(
                'sorry!unable to verify your user information,we create a new account for you!\n' +
                e
            );
            console.log(e);
            Promise.reject();
        });
};

const register = (user = { name: createDefaultName() }) => {
    return registerUser(user)
        .then(v => {
            setUserInfo(v.user);
        })
        .catch(e => {
            if (e) return vscode.window.showErrorMessage('register failed' + e) && Promise.reject();
        });
};

const checkUser = async () => {
    if (!getUserInfo()) {
        vscode.window.showInformationMessage(
            'we create a new account for you!'
        );
        await register();
    } else {
        await profile();
    }
    socket(process.env.SERVER_URL, {
        query: user()
    })
};

const createDefaultName = () => {
    return os.hostname() + Math.floor(Math.random() * 10000);
};

module.exports = {
    profile,
    getUserInfo,
    setUserInfo,
    createDefaultName,
    register,
    checkUser
};
