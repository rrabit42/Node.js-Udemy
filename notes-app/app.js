//npm module을 먼저 설치해줘야함
//npm install

const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other styles. Makek text bold and inversed.

const chalk = require('chalk')
console.log(chalk.green('Success!'));
