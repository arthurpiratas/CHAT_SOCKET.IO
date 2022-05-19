const express = require("express")
const app = express()

const http = require("http").createServer(app)
const io = require("socket.io")(http)


io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        console.log("x desconectou: " + socket.id)
    })

    socket.on("msg", (data) => {
        io.emit("showmsg", data)
        
    })


})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () => {
    console.log("APP RODANDO!")
})