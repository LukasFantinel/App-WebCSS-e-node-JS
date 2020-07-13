const env = require('./env.js');

const Sequelize = require('sequelize');

const modelCidade = require('../model/cidade.model.js');

const conexaoSequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    logging: env.logging,
    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.conexaoSequelize = conexaoSequelize;

db.estados = modelCidade(db.conexaoSequelize, db.Sequelize);

module.exports = db;