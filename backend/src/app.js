const express = require ('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**Métodos HTTP:
*GET -> Buscar/listar uma info no backend
*POST -> Criar uma info no backend
*PUT -> Alterar uma info no backend
*DELETE -> Deletar uma info no backend
*

Tipos de Parametros
* Query -> parametros nomeados enviados na rota após o simbolo de ?
            e geralmente servem para filtros, paginação
* Route Params -> parametros utilizados para identificar recursos
* Request body -> corpo da requisição utilizado para criar ou alterar recursos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: Select * From users
  * Query Builder: table('users').select('*').where()
  */