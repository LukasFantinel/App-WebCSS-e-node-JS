const db = require('../config/db.config');
const Estado = db.estados;
const Op = db.Sequelize.Op;

exports.criar = (req, res) => {
    console.log('Corpo da requisição: ', req.body);
    Estado.create({
        estado: req.body.estado,
        cidade: req.body.cidade,
        hospital: req.body.hospital,
        confirmado: req.body.confirmado,
        suspeito: req.body.suspeito,
        obitos: req.body.obitos,
        curados: req.body.curados,

    }).then(estado => {
        res.send(estado);
    });
}

exports.listar = (req, res) => {

    Estado.findAll().then(estados => {
        res.send(estados);
    });

}

exports.buscarPeloCodigo = (req, res) => {
    console.log('Estado: ', req.params.id_estado);
    Estado.findOne({ where: { id_estado: req.params.id_estado } }).then(estado => {
        res.send(estado);
    });
}

exports.atualizar = (req, res) => {
    const id = req.params.id_estado;

    Estado.update({
        estado: req.body.estado,
        cidade: req.body.cidade,
        hospital: req.body.hospital,
        confirmado: req.body.confirmado,
        suspeito: req.body.suspeito,
        obitos: req.body.obitos,
        curados: req.body.curados
    }, {
        where: {
            id_estado: id
        }
    }).then(() => {
        res.status(200).send(`Estado com codigo ${id} atualizado com sucesso`);
    });
}

exports.deletar = (req, res) => {
    const id = req.params.id_estado;
    Estado.destroy({
        where: { id_estado: id }
    }).then(() => {
        res.status(200).send(`Estado com o codigo ${id} deletado`);
    });
};