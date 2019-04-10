const { service } = require('./utils');

exports.registerUser = user => {
    return service.get('/register', {
        params: { user }
    });
};

exports.profileUser = _id => {
    return service.get('/profile', {
        params: { _id }
    });
};
