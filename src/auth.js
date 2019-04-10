const vscode = require('vscode');
const os = require('os');
const socket = require('./socket')();
const webview = require('./webview');
const { registerUser, profileUser } = require('./service');
const { context } = require('./index');

let currentUser;

const profile = () => {
    const { _id } = currentUser;
    return new Promise((resolve, reject) => {
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
            });
    });
};

const register = (user = { name: createDefaultName() }) => {
    registerUser(user)
        .then(v => {
            // if(){}
            setUserInfo(v.user);
        })
        .catch(e => {
            if (e) return vscode.window.showErrorMessage('register failed' + e);
        });
};

const checkUser = async () => {
    if (!getUserInfo()) {
        vscode.window.showInformationMessage(
            'we create a new account for you!'
        );
        webview.register();
        return false;
    }
    await profile();
    if (!currentUser) {
        vscode.window.showInformationMessage(
            'we create a new account for you!'
        );
        register();
        return false;
    }
    return true;
};

const getUserInfo = () => {
    return (currentUser = context().globalState.get('user'));
};

const setUserInfo = user => {
    context().globalState.update('user', user);
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
    checkUser,
    user: currentUser
};
