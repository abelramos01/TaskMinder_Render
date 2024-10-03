const express = require('express');
const server = express();
const path = require('path');

// Expor a pasta public como arquivos estáticos
server.use(express.static(path.join(__dirname, 'public')));

// Expor a pasta views para servir as páginas HTML
server.use(express.static(path.join(__dirname, 'views')));

// Expor a pasta imagens (separada de public)
server.use(express.static(path.join(__dirname, 'imagens')));

// Middleware para processar JSON no corpo da requisição
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Rota para enviar a página index.html
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Rota para enviar a página cadastro.html
server.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cadastro.html'));
});

// Rota para enviar a página editar.html
server.get('/editar', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/editar.html'));
});

// Inicia o servidor
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
