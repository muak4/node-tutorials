const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end("Welcome")
// })
const server = http.createServer()  // Using Event emitter API

// emits request event, subscribe to it, listen to it and respond to it
server.on('request', (req, res) => {
    res.end("Welcome")
})

server.listen(5000)