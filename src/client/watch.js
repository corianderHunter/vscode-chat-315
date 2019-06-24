const watch = require("gulp-watch");
const { spawn } = require(`child_process`);
const chalk = require(`chalk`);
const {debounce} = require('lodash')
console.log(chalk.green`---------------------start watch--------------------`)
const execute = debounce(()=>{
    const ls = spawn(`npm`, [`run`, `build`]);
    ls.stdout.on(`data`, (data) => {
        console.log(chalk.bold`[watch]: ${data}`);
    });
      
    ls.stderr.on(`data`, (data) => {
        console.log(chalk.bold`[watch]: ${data}`);
    });
    
    ls.on(`close`, () => {
        console.log(chalk.green`---------------------build finish-------------------`)
    });
    
},1500)
watch([`src`,`public`],execute)