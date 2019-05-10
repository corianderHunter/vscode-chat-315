const webview = require('../../webview');
const { checkUser } = require('../../auth');
const { init } = require('../../service');

module.exports = {
    'extension.chat315': async () => {
        await checkUser();
        init()
        webview.chart();
    }
};
