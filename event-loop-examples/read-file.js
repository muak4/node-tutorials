const { readFile } = require('fs')

console.log('Started a first task')

// Check File Path!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed the first task')
})

console.log('Starting the nexxt task')