const vscode = require('vscode');
const { context } = require('./index');
const { loadHtml } = require('./utils');

const chart = () => {
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
    const _webview = _webviewPanel.webview;
    const _html = loadHtml(context(), 'src/client/dist/index.html');
    _webview.html = _html;
};

const register = () => {
    const _webviewPanel = vscode.window.createWebviewPanel(
        'browser.tab',
        'register',
        {
            preserveFocus: true,
            viewColumn: 1
        },
        {
            retainContextWhenHidden: true,
            enableScripts: true
        }
    );
    const _webview = _webviewPanel.webview;
    const _html = loadHtml(context(), 'src/client/dist/register.html');
    _webview.html = _html;
};

module.exports = {
    chart,
    register
};
