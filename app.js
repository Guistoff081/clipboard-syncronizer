const express = require('express');
 
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
 
const app = express();
 
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
 
app.use(helmet());
 
app.use(express.json());
 
app.use(morgan('dev'));
 
app.post('/sending', (req, res, next) => {
    res.json({ command: 'copy', content: 'alguma coisa pra copiar' });
});
 
module.exports = app;
