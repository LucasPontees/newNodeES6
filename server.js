import express from 'express'

const server = express()

server.get("/", (request, response)=>{
    response.send("Pagina principal")
})

server.listen(3000, ()=>{
    console.log(`Sistema rodando em http://localhost:3000`)
})