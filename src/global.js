let isExist = false, currentContext = {}, currentUser
module.exports.exist = () => {
    return isExist
}

module.exports.registerContext = (v) => {
    return currentContext = v;
}

module.exports.context = () => {
    return currentContext
}

module.exports.updateExist = (v) => {
    return isExist = !!v
}

module.exports.user = () => {
    return currentUser
}

module.exports.getUserInfo = () => {
    return (currentUser = currentContext.globalState.get('user'));
};

module.exports.setUserInfo = user => {
    currentContext.globalState.update('user', user);
};