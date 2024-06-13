//Displays the path of the current file
const path = require('path')
console.log(path.sep)
//Joins the path of the file and displays it according to the format of the os
const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)
//Shows the name of the base name 
const base = path.basename(filepath); 
console.log(base)
//The Method displays the absolute path of the specified entity
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)