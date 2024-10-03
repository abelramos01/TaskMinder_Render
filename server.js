const express = require('express');
const server = express();
const path = require('path');


server.use(express.static(path.join(__dirname, 'public')));

server.use(express.static(path.join(__dirname, 'views')));

<<<<<<< HEAD


=======
// Middleware para processar JSON no corpo da requisição
>>>>>>> cb393364a6a79077d4af4ea3906e336b478fc0f3
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

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
