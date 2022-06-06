var empresaModel = require("../models/empresaModel");

var sessoes = [];

function testar (req, res) {
    console.log("ENTRAMOS NA empresaController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    idEmpresa = req.params.idEmpresa
    empresaModel.listar(idEmpresa)
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

function listarMaquinas(req, res) {
    idEmpresa = req.params.idEmpresa
    empresaModel.listarMaquinas(idEmpresa)
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

function entrar (req, res) {
    var login = req.body.login;
    var senha = req.body.senha;

    if (login == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        empresaModel.entrar(login, senha)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de uma empresa com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var cnpj = req.body.cnpj;
    var cep = req.body.cep;
    var numero = req.body.numero;
    var complemento = req.body.complemento;
    var email = req.body.email;
    var senha = req.body.senha;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        empresaModel.cadastrar(nome, cnpj, cep, numero, complemento, email, senha)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function deletarMaquina(req, res) {
    let idMaquina = req.params.idMaquina;
    empresaModel.deletarMaquina(idMaquina)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function deletarUsuario(req, res) {
    let idUsuario = req.params.idUsuario;
    empresaModel.deletarUsuario(idUsuario)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function atualizarEmpresa(req, res) {
    let idEmpresa = req.params.idEmpresa;
    let campoSelecionado = req.body.campoSelecionado;
    let novoDado = req.body.novoDado;

    if (idEmpresa == undefined) {
        res.status(400).send("O id está undefined!");
    } else if (campoSelecionado == undefined) {
        res.status(400).send("O campo está undefined!");
    } else if (novoDado == undefined) {
        res.status(400).send("o valor está undefined!");
    } else {
        empresaModel.atualizarEmpresa(idEmpresa, campoSelecionado, novoDado)
        .then(
            function(resposta) {
                res.json(resposta);
            }
        ).catch(
            function(error) {
                console.log(error);
                console.log(error.sqlMessage);
            }
        )
    }
}

function listarProgramasProibidos(req, res) {
    let idMaquina = req.params.idMaquina;
    empresaModel.listarProgramasProibidos(idMaquina)
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

function listarProgramasPermitidos(req, res) {
    let idMaquina = req.params.idMaquina;
    empresaModel.listarProgramasPermitidos(idMaquina)
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

function autorizarPrograma(req, res) {
    let idPrograma = req.params.idPrograma;
    empresaModel.autorizarPrograma(idPrograma)
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

function bloquearPrograma(req, res) {
    let idPrograma = req.params.idPrograma;
    empresaModel.bloquearPrograma(idPrograma)
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
module.exports = {
    entrar,
    cadastrar,
    listar,   
    testar,
    listarMaquinas,
    deletarMaquina,
    deletarUsuario,
    atualizarEmpresa,
    listarProgramasProibidos,
    listarProgramasPermitidos,
    autorizarPrograma,
    bloquearPrograma,
}