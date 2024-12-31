const express = require('express');
const path = require('path');

const app = express();
const port = 3004;

// Servir arquivos estáticos de 'src'
app.use('/src', express.static(path.join(__dirname, 'src')));

// Servir arquivos estáticos de 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
