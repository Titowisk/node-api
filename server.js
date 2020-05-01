const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia a aplicação
const app = express();
app.use(express.json()); // permite à aplicação aceitar body em formato JSON
app.use(cors());

// Inicia o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
requireDir('./src/models');

/** Rotas
 * Toda rota que começar por /api, será gerenciada pelo path fornecido
 */
app.use('/api', require('./src/routes'));

app.listen(3001);
