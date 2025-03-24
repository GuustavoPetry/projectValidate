require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para o formulário de feedback
app.post('/feedback', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'thank_you.html'));
});

// Middleware para capturar erros 404 (deve ser a ÚLTIMA configuração)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'thank_you.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
