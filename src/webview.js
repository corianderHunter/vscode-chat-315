const vscode = require('vscode');
const { context, exist, updateExist } = require('./global');
const { loadHtml } = require('./utils');

let _webview;

const chart = () => {
    if (exist()) return _webview
    const _webviewPanel = vscode.window.createWebviewPanel(
        'browser.tab',
        'chat-room',
        {
            preserveFocus: true,
            viewColumn: 1
        },
        {
            retainContextWhenHidden: true,
            enableScripts: true
        }
    );
    _webviewPanel.onDidDispose(e => {
        updateExist(false)
    });
    _webview = _webviewPanel.webview;
    const _html = loadHtml(context(), 'src/client/dist/index.html');
    vscode.window.showInformationMessage('initing chat room!');
    _webview.html = _html;
    updateExist(true);
};



module.exports = {
    chart
};
