require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

// Conectar ao banco de dados MySQL
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Erro ao conectar ao banco de dados:', err.stack);
//     return;
//   }
//   console.log('Conectado ao banco de dados MySQL');
// });

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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



