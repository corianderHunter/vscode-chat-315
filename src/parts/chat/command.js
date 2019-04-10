const vscode = require('vscode')
const webview = require('../../webview')
const {
    checkUser
} = require('../../auth')

module.exports = {
    "extension.chat315": () => {
        if (!checkUser()) return;
        vscode.window.showInformationMessage('initing chat room!');
        webview.chart()
    }
}