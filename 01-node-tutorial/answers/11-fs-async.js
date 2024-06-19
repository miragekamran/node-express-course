const { readFile, writeFile } = require("fs");


readFile('./temporary/fileB.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const secondText = result
    writeFile('./temporary/result-async.txt',
        `final texts are : ${secondText}`
        , (err, result) => {
            if (err) {
                console.log(err)
            return
            }
            console.log(result)
    })
})

