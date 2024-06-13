const { readFile, writeFile } = require('fs')
//read the file and display the result
console.log('Start')
readFile('./content/first.txt', 'utf8', ( error, result)=>{
    if(error){
        console.log(error)
        return
    }
    const first=result;
    readFile('./content/second.txt', 'utf8', (error, result) =>{
        if(error){
            console.log(error)
            return
        }
        const second =result;
        writeFile('./content/result-async.txt', `Here are the files: ${first}, ${second}`, (error, result)=> {
            if(error){
                console.log(error)
                return
            }
            console.log('done with the task')
        })
    })
})
console.log('Starting another task')