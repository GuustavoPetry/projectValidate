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
  // const { email, question1, question2, question3, question4, question5, question6, question7 } = req.body;

  // // Passo 1: Verificar se o e-mail já existe no banco de dados
  // const checkEmailQuery = 'SELECT * FROM feedback WHERE email = ?';
  // db.query(checkEmailQuery, [email], (err, result) => {
  //   if (err) {
  //     console.error('Erro ao verificar e-mail:', err);
  //     return res.sendFile(path.join(__dirname, 'public', 'error.html'));
  //   }

  //   // Se já existir um registro com o mesmo e-mail
  //   if (result.length > 0) {
  //     return res.sendFile(path.join(__dirname, 'public', 'email_exists.html'));
  //   }

  //   // Passo 2: Se o e-mail não existir, inserir o feedback no banco de dados
  //   const insertQuery = 'INSERT INTO feedback (email, question1, question2, question3, question4, question5, question6, question7) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  //   db.query(insertQuery, [email, question1, question2, question3, question4, question5, question6, question7], (err, result) => {
  //     if (err) {
  //       console.error('Erro ao inserir no banco de dados:', err);
  //       return res.sendFile(path.join(__dirname, 'public', 'error.html'));
  //     }
      // Após o sucesso, renderize a página de agradecimento
      res.sendFile(path.join(__dirname, 'public', 'thank_you.html'));
    });
  // });
// });

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Exportar a conexão do banco de dados
// module.exports.db = db;
