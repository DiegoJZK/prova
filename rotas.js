const express = require("express")

const routes = express.Router()

let lista = [
    {
    "id": 1,
    "descricao": "Camiseta",
    "preco": 29.99,
    "cores": ["preto", "branco", "cinza"]
    },
    {
    "id": 2,
    "descricao": "Calça Jeans",
    "preco": 79.99,
    "cores": ["azul claro", "azul escuro"]
    },
    {
    "id": 3,
    "descricao": "Tênis Esportivo",
    "preco": 149.99,
    "cores": ["preto", "branco", "cinza", "azul"]
    },
    {
    "id": 4,
    "descricao": "Jaqueta de Couro",
    "preco": 99.99,
    "cores": ["preto", "marrom"]
    }
]
routes.get("/",(req,res)=>{
    res.status(200).json(lista)
})

routes.get("/:id",(req,res)=>{
    res.status(200).json(lista[req.params.id-1])
})

routes.delete("/:id",(req,res)=>{
    const Indice = lista.findIndex(p => p.id == req.params.id);
    if (Indice >= 0) {
      lista.splice(Indice, 1);
      res.status(200).redirect("/")
    }
})



routes.put("/:id",(req,res)=>{
    console.log(req.body)
    lista[req.params.id-1] = req.body
    res.status(200).send("OK")
})

routes.post("/",(req,res)=>{
    lista.push(req.body)
    res.status(200).json(lista)
})

module.exports = routes