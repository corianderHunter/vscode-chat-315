const vscode = require('vscode');
// const socket = require('../../socket')()
const { checkUser } = require('../../auth');

module.exports = {
    'extension.shareCode': async () => {
        await checkUser()
        vscode.window.showInformationMessage('Share Code!');
        const _document = vscode.window.activeTextEditor.document;
        const content = _document.getText();
        const language = _document.languageId;

        const documentText = vscode.workspace.openTextDocument({
            content: content,
            language
        })

        vscode.workspace.onDidChangeTextDocument((e) => {
            console.log(e.contentChanges, e.document)
        })

        vscode.window.showTextDocument(documentText, {
            preview: true,
            viewColumn: vscode.ViewColumn.Beside
        })
            .then((textDocument) => {
                textDocument.edit((editBuilder) => {
                    editBuilder.insert(new vscode.Position(0, 0), `/**\n* Module dependencies.\n*/\n`)
                })
            })
    }
};
