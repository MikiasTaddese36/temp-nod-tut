const{ readFileSync, writeFileSync } = require('fs')
//Read from the text files
console.log('Start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)

//Create a file and write the values of the passed arguments

writeFileSync('./content/result-sync.txt', 
                `Here is the result file: ${first}, ${second}`, 
                {flag: 'a'})
console.log('Done with this task')
console.log('Starting the next one')