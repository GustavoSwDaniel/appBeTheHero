/**
 * Rota / recursos
 */

/**
 * Metodos HTTP:
 * 
 * GET: Buscara uma informação do back-end
 * POST: Criar um informação no Back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parâmentros nomeados enviados na rota após o "?" (Filtors, paginação)
 * Routs Params: Parâmetros utlizandos para identificar recursos
 * Request Bady: Corpo da requisição, ulizado para criar ou altera recursos
 */


/**
 * SQL: My SQL, SQLite, PostegreSQP, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * SQL
 * Driver: SELECT * FROM users
 * Query builder: table('users').select('*').where()
 */



const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;