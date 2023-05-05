const chalk = require ('chalk');

console.log(chalk.yellow.bold.underline('Hello world!'));
console.log(chalk.rgb(123, 45, 67).underline.bold('Underlined reddish color'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));