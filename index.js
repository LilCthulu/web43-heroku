require("dotenv").config()
console.log("it's AlIiIiVeE")

const express = require("express")


const server = express()
server.use(express.json())


//Setting up Cross-Origin Resource sharing for production environment
if (process.NODE_ENV === "development") {

    const cors = require("cors")
    server.use(cors())
}

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log("Server listening on ", PORT)
})

//Endpoints
server.use("*", (req, res, next) => {
    res.send('<h1> I DEED IT </h1>')
})