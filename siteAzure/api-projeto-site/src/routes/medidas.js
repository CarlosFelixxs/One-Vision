var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idSensor", function(req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSensor", function(req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})


router.get("/acessarIdMaquina/:idUsuario", function(req, res) {
    medidaController.acessarIdMaquina(req, res);
})

router.get("/quantidadeProgramasRodando/:idMaquina", function(req, res) {
    medidaController.quantidadeProgramasRodando(req, res);
})

router.get("/acessarIdComponenteMaquina/:idMaquina/:nomeComponente", function(req, res) {
    medidaController.acessarIdComponenteMaquina(req, res);
})

router.get("/acessarConsumoComponente/:idComponenteMaquina", function(req, res) {
    medidaController.acessarConsumoComponente(req, res);
})

router.get("/acessarUltimosRegistrosComponente/:idComponenteMaquina", function(req, res) {
    medidaController.acessarUltimosRegistrosComponente(req, res);
})

router.get("/acessarHoraRegistrosComponente/:idComponenteMaquina", function(req, res) {
    medidaController.acessarHoraRegistrosComponente(req, res);
})

router.get("/acessarTotalComponenteMaquina/:idMaquina/:nomeComponente", function(req, res) {
    medidaController.acessarTotalComponenteMaquina(req, res);
})

router.get("/acessarProgramasConsumoCPU/:idMaquina", function(req, res) {
    medidaController.acessarProgramasConsumoCPU(req, res);
})

router.get("/acessarProgramasConsumoMemoria/:idMaquina", function(req, res) {
    medidaController.acessarProgramasConsumoMemoria(req, res);
})

module.exports = router;