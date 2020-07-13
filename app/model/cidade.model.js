module.exports = (conexaoSequelize, Sequelize) => {

    const Estado = conexaoSequelize.define('estado', {
        id_estado: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado: {
            type: Sequelize.STRING(200)
        },
        cidade: {
            type: Sequelize.STRING(200)
        },
        hospital: {
            type: Sequelize.STRING(200)
        },
        confirmado: {
            type: Sequelize.INTEGER
        },
        suspeito: {
            type: Sequelize.INTEGER
        },
        obitos: {
            type: Sequelize.INTEGER
        },
        curados: {
            type: Sequelize.INTEGER
        }

    });
    return Estado;

}