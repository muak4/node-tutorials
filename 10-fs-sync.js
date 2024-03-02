const { readFileSync, writeFileSync } = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)

writeFileSync(
    './content/result-sync.txxt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' },
)

console.log('Done with this task')
console.log('Startinng the next one')