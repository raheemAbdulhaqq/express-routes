const express = require("express")

const app = express()


app.get("/", (req, res) => {
    res.send("Settings Page")
})

app.get("/profile", (req, res) => {
    res.send(`User Profile Page`)
})

module.exports = app