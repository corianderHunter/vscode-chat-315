const { service } = require('./utils');
const pathToRegexp = require('path-to-regexp')
const _ = require('lodash')
const { getUserInfo } = require('./global')

function handlerUrlParams(url, obj) {
    if (!_.isEmpty(obj)) {
        url = pathToRegexp.compile(url)(obj);
    }
    return url
}

const registerUser = user => {
    return service.get('/register', {
        params: { ...user }
    });
};

const friendsList = () => {
    const url = handlerUrlParams('/:_id/friend', { _id: getUserInfo()._id })
    return service.get(url)
}

const roomList = () => {
    const url = handlerUrlParams('/:_id/room', { _id: getUserInfo()._id })
    return service.get(url)
}

const profileUser = _id => {
    return service.get('/profile', {
        params: { _id }
    });
};

const init = () => {
    friendsList().then(data => {
        console.log(data)
    }).catch(e => {
        console.log(e)
    })
    roomList().then(data => {
        console.log(data)
    }).catch(e => {
        console.log(e)
    })
}

module.exports = {
    registerUser,
    roomList,
    friendsList,
    profileUser,
    init
}