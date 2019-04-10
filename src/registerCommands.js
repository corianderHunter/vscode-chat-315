const vscode = require('vscode');

const commands = [
    require('./parts/share/command'),
    require('./parts/chat/command')
];

module.exports = context => {
    commands.forEach(value => {
        for (let pro in value) {
            context.subscriptions.push(
                vscode.commands.registerCommand(pro, () => {
                    value[pro].call(null, context);
                })
            );
        }
    });
};
