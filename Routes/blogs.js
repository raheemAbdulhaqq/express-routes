const express = require("express")

const app = express()

//blogs
app.get("/", (req, res) => {
    res.send("All blogs")
})

app.get("/:id", (req, res) => {
    res.send(`View blog ${req.params.id}`)
})

module.exports = app