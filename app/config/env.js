const env = {
    database: 'api-node-es',
    username: 'postgres',
    password: 'lukas123',
    host: 'localhost',
    dialect: 'postgres',
    logging: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
module.exports = env;