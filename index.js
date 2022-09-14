const express = require("express")
const settings = require("./Routes/settings")
const blogs = require("./Routes/blogs")
const dashboard = require("./Routes/dashboard")

const app = express()

app.use("/", dashboard)

app.use("/settings", settings)

app.use("/blogs", blogs)

app.listen(3000, () => {
    console.log("server running on http://localhost:3000")
})