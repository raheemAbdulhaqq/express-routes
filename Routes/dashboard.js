const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello, This is the home page")
})

module.exports = app