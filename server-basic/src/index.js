require('dotenv').config()
console.log(process.env.PORT)
const Server = require("./server")

const server = new Server()

server.execute()