// @ts-nocheck
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '.env')
});

const { updateExist, registerContext } = require('./global')
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    registerContext(context)
    const registerCommands = require('./registerCommands');
    registerCommands(context);
}

// this method is called when your extension is deactivated
function deactivate() {
    updateExist(false)
}

module.exports = {
    activate,
    deactivate,
};
