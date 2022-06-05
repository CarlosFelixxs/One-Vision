var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get("/acessarIdMaquina/:idUsuario", function(req, res) {
    maquinaController.acessarIdMaquina(req, res);
})

router.post("/quantidadeProgramasRodando/:idMaquina", function(req, res) {
    maquinaController.quantidadeProgramasRodando(req, res);
})

module.exports = {
    router
}