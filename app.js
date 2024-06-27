require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnectNoSql = require('./config/mongo.js');
const mainRouter = require('./routes/index.js');
const morganBody = require('morgan-body');
const loggerStream = require('./utils/hanldeLogger.js')
const ENGINE_DB = process.env.ENGINE_DB
const { dbConnectMySql } = require('./config/mysql.js');


morganBody(app, {
    noColors: true,
    stream: loggerStream,
    skip: function (req, res) {
        return res.statusCode < 400
    }
})

app.use(cors());
app.use(express.json());
app.use('/api', mainRouter);
app.use(express.static('storage'));





const port = process.env.PORT || 3001;


/*
    NoSql conexion
*/

app.listen(port, () => {
    console.log(`Tu app está lista por http://localhost:${port}`);
});

(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySql();


/*
    Descomentar a partir de aquí, para trabajar con Bases de datos relacionales
*/

// module.exports = app;