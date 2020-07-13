const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const http = require('http');
const db = require('./app/config/db.config.js');

app.use(bodyParser.json());
app.use(cors());

const cidadeRoute = require('./app/route/cidade.route.js');

this.http = http.createServer(app);

db.conexaoSequelize.sync({ force: false }).then(() => {
    console.log('Exclusão e sincronização com force');
});

const urlEncondedParser = bodyParser.urlencoded({ extended: false });
app.urlEncondedParser = urlEncondedParser;

cidadeRoute(app);

var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port

    console.log("Servidor executando na porta ", host, port);
});

app.use((req, res, next) => {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:8081/api/cidades/1");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});