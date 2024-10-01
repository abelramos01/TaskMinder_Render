const express = require('express');
const server = express();
const path = require('path');

// Middleware para processar JSON no corpo da requisição
server.use(express.json());
server.use(express.urlencoded({ extended: true })); // Para processar dados de formulários

// Servir arquivos estáticos
server.use(express.static(path.join(__dirname, 'public')));

// Rota para enviar a página index.html
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// Rota POST para o cadastro de atividades
server.post('/cadastro', (req, res) => {
    const { nomeAtividade, dataAtividade, descricao } = req.body;
    console.log('Dados do cadastro:', nomeAtividade, dataAtividade, descricao);
    // Processar os dados, salvar no banco de dados, etc.

    // Enviar uma resposta ao cliente (ou redirecionar para outra página)
    res.redirect('/');  // Por exemplo, redireciona de volta para a página inicial
});

// Rota POST para editar atividades
server.post('/editar', (req, res) => {
    const { id, nomeAtividade, dataAtividade, descricao } = req.body;
    console.log('Dados para edição:', id, nomeAtividade, dataAtividade, descricao);
    // Processar a edição dos dados

    // Enviar uma resposta ao cliente
    res.redirect('/');  // Ou redirecionar após edição
});

// Inicia o servidor
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

