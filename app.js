const express = require("express");

const app = express();

const router = require("./router/default_routes.js")

const path = require("path")

app.set("view engine", "ejs");

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({extended: true}))

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})

app.use(router)
