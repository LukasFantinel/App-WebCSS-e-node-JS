module.exports = function(app) {

    const estados = require('../controller/cidade.controller.js');

    app.post('/api/estados', app.urlEncondedParser, estados.criar);

    app.get('/api/estados', estados.listar);

    /**Fazer chamadas de buscar pelo codigo */
    app.get('/api/estados/:id_estado', estados.buscarPeloCodigo);

    app.put('/api/estados/:id_estado', app.urlEncondedParser, estados.atualizar);

    app.delete('/api/estados/:id_estado', estados.deletar);

}