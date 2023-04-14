const express = require('express');
const app = express();
const port = 8080;

const cors = require('cors');
app.use(cors());

require('dotenv').config();

const jwt = require('jsonwebtoken');

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

//verifica se o a chave da API está correta
app.use((req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(401).send('API Key inválida');
    }
});

//cria a tabela admins caso ela não exista
pool.query(`
CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
)`
);

//cria a tabela palavras_ofensivas caso ela não exista
pool.query(`
CREATE TABLE IF NOT EXISTS palavras_ofensivas (
    id SERIAL PRIMARY KEY,
    palavra VARCHAR(255) NOT NULL
)`
);

//cadastra uma palavra ofensiva
app.post('/palavras-ofensivas', async (req, res) => {
    const { palavra } = req.body;
    const resultado = await pool.query('INSERT INTO palavras_ofensivas (palavra) VALUES ($1)', [palavra.toLowerCase()]);
    res.send('Palavra cadastrada com sucesso!');
});

//mostra todas as palavras ofensivas cadastradas
app.get('/palavras-ofensivas', async (req, res) => {
    const resultado = await pool.query('SELECT * FROM palavras_ofensivas');
    res.send(resultado.rows);
});

//mostra uma palavra ofensiva pelo id
app.get('/palavras-ofensivas/:id', async (req, res) => {
    const { id } = req.params;
    const resultado = await pool.query('SELECT * FROM palavras_ofensivas WHERE id = $1', [id]);
    res.send(resultado.rows);
});

//deleta uma palavra ofensiva pelo id
app.delete('/palavras-ofensivas/:id', async (req, res) => {
    const { id } = req.params;
    const resultado = await pool.query('DELETE FROM palavras_ofensivas WHERE id = $1', [id]);
    res.send('Palavra deletada com sucesso!');
});

//atualiza uma palavra ofensiva pelo id
app.put('/palavras-ofensivas/:id', async (req, res) => {
    const { id } = req.params;
    const { palavra } = req.body;
    const resultado = await pool.query('UPDATE palavras_ofensivas SET palavra = $1 WHERE id = $2', [palavra.toLowerCase(), id]);
    res.send('Palavra atualizada com sucesso!');
});

//cadastra um administrador
app.post('/cadastro-admin', async (req, res) => {
    const { nome, email, senha } = req.body;
    const resultado = await pool.query('INSERT INTO admins (nome, email, senha) VALUES ($1, $2, $3) RETURNING *', [nome, email, senha]);
    res.send('Admin cadastradp com sucesso!');

    if (resultado.rows.length === 0) {
        res.status(401).send('Email ou senha inválidos');
    }
});

//faz o login do administrador e retorna um token de autenticação
app.post('/login-admin', async (req, res) => {
    const { email, senha } = req.body;
    const resultado = await pool.query('SELECT * FROM admins WHERE email = $1 AND senha = $2', [email, senha]);
    if (resultado.rows.length === 0) {
        res.status(401).send('Email ou senha inválidos');
    } else {
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.send(token);
    }
});


app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`)
});