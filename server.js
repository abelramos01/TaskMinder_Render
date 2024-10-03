const express = require('express');
const server = express();
const path = require('path');


server.use(express.static(path.join(__dirname, 'public')));

server.use(express.static(path.join(__dirname, 'views')));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});


server.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cadastro.html'));
});


server.get('/editar', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/editar.html'));
});

server.use(function (req, res, next) {
    console.log('aqui');
    return res.sendFile(path.join(__dirname, 'views/404.html'))
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
