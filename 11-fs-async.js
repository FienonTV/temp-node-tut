const {readFile, writeFile, read, write} = require('fs')


console.log("Start");
readFile('./content/first.txt', 'utf-8', (err,result)=>{
    if(err) {
        console.log(err);
        return null;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if(err) {
            console.log(err);
            return null;
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result:  ${first}, ${second}`,(err,result)=> {
            if(err) {
                console.log(err);
                return;
            }
            console.log("done with task");
        })
        })
    })
    console.log("Starting next one");