const express = require('express');
const cors = require('cors')
const bp = require('body-parser')
const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true}))

const contatos = [
    { nome: "Pedro", telefone: "99998888", data: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "Celular" } },
    { nome: "Ana", telefone: "99998777", data: new Date(), operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" } },
    { nome: "Maria", telefone: "99996666", data: new Date(), operadora: { nome: "Tim", codigo: 41, categoria: "Celular" } },
]

const operadoras = [
    { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
    { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
    { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
    { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
    { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 },
]

app.use((req, res, next) => {
    // console.log('acessou o middleware!');
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    app.use(cors())
    next()
})

// Rotas
app.get('/operadoras', (request, response) => {
    return response.send(
        operadoras
    );
});

app.post('/contatos', (request, response) => {
    console.log('Cadastrou Contato')
    contatos.push(request.body)
    return response.send(
        contatos
    )
})

app.get('/contatos', (request, response) => {

    return response.send(
        contatos
    );
});

app.listen(3333);