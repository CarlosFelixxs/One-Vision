var maquinaModel = require("../models/maquinaModel");

function acessarIdMaquina(req, res) {
    idUsuario = req.params.idUsuario
    maquinaModel.acessarIdMaquina(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function quantidadeProgramasRodando(req, res) {
    idMaquina = req.params.idMaquina
    maquinaModel.quantidadeProgramasRodando(idMaquina)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function(erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    acessarIdMaquina,
    quantidadeProgramasRodando,

}