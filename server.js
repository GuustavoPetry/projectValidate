const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Importa as rotas do feedback
const feedbackRoutes = require("./routes/feedback");

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Usa as rotas configuradas
app.use("/api/feedback", feedbackRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
