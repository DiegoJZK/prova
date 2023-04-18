const express = require("express")
const routes = require("./rotas")
const server = express()


server .use(express.json())
server .use(express.urlencoded({extended:true}))
server .use(routes)

server.listen(3000,()=>{
    console.log("servidor em execução")
})

