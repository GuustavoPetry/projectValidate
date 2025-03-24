require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/thank_you.html');
});

app.post('/feedback', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'thank_you.html'));
});


// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



