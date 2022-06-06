var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/", function(req, res) {
    empresaController.testar(req, res);
});

router.get("/listar/:idEmpresa", function(req, res) {
    empresaController.listar(req, res);
});

router.get("/listarMaquinas/:idEmpresa", function(req, res) {
    empresaController.listarMaquinas(req, res);
});

router.post("/cadastrar", function(req, res) {
    empresaController.cadastrar(req, res);
})

router.post("/autenticar", function(req, res) {
    empresaController.entrar(req, res);
});

router.post("/deletarMaquina/:idMaquina", function(req, res) {
    empresaController.deletarMaquina(req, res);
});

router.post("/deletarUsuario/:idUsuario", function(req, res) {
    empresaController.deletarUsuario(req, res);
});
  
router.post("/atualizarEmpresa/:idEmpresa", function(req, res) {
    empresaController.atualizarEmpresa(req, res);
});

router.get("/listarProgramasProibidos/:idMaquina", function(req, res) {
    empresaController.listarProgramasProibidos(req, res);
});

router.get("/listarProgramasPermitidos/:idMaquina", function(req, res) {
    empresaController.listarProgramasPermitidos(req, res);
});

router.post("/autorizarPrograma/:idPrograma", function(req, res) {
    empresaController.autorizarPrograma(req, res);
});

router.post("/bloquearPrograma/:idPrograma", function(req, res) {
    empresaController.bloquearPrograma(req, res);
});

module.exports = router;