const express = require('express')
const dbconnention = require("./database/config")
class Server {
    constructor() {
        this.app = express() 
        this.port = process.env.PORT || 4000;
    }
    middlewares() {
        this.app.use(express.json())
        this.app.use(require("./routes/userRoutes"))
    }

    execute() {
        dbconnention()
        this.middlewares()
        this.app.listen(this.port, () => {
            console.log(`http:localhost:${this.port}`)
        })
    }
}

module.exports = Server