var database = require("../database/config")

function listar(idEmpresa) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT COUNT(Nome) as "contagem" FROM Usuario where fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    
    return database.executarMysql(instrucao);
}

function entrar(login, senha) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", login, senha)
    var instrucao = `
        SELECT * FROM Empresa WHERE Email = '${login}' AND Senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executarMysql(instrucao);
}

function cadastrar(nome, cnpj, cep, numero, complemento, email, senha) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    var instrucao = `
        INSERT INTO Empresa (Nome, CNPJ, CEP, Numero, Complemento, Email, Senha) VALUES ('${nome}', '${cnpj}', '${cep}', '${numero}', '${complemento}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executarMysql(instrucao);
}

function listarMaquinas(idEmpresa) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        select idMaquina, hostName, fkUsuario, maquina.fkEmpresa, usuario.nome as 'nomeUsuario' from maquina inner join usuario
            on fkUsuario = idUsuario where maquina.fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executarMysql(instrucao);
}

function deletarMaquina(idMaquina) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarMaquina");
    let instrucao = `
        DELETE FROM maquina WHERE idMaquina = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);

    return database.executarMysql(instrucao);
}

function deletarUsuario(idUsuario) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarUsuario()");
    let instrucao = `
        DELETE FROM usuario WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executarMysql(instrucao);
}

function atualizarEmpresa(idEmpresa, campoSelecionado, novoDado) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarEmpresa()");
    let instrucao = `
        update empresa set ${campoSelecionado} = '${novoDado}' WHERE idEmpresa = ${idEmpresa};
    `;

    return database.executarMysql(instrucao);
}

function listarProgramasProibidos(idMaquina) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarEmpresa()");
    let instrucao = `
        select nomePrograma, idPrograma from programa where fkMaquina = ${idMaquina} AND isProibido = 1  order by nomePrograma;
    `;

    return database.executarMysql(instrucao);
}

function listarProgramasPermitidos(idMaquina) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarEmpresa()");
    let instrucao = `
        select nomePrograma, idPrograma from programa where fkMaquina = ${idMaquina} AND isProibido = 0  order by nomePrograma;
    `;

    return database.executarMysql(instrucao);
}

function autorizarPrograma(idPrograma) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarEmpresa()");
    let instrucao = `
        update programa set isProibido = 0 where idPrograma = ${idPrograma};
    `;

    return database.executarMysql(instrucao);
}

function bloquearPrograma(idPrograma) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarEmpresa()");
    let instrucao = `
        update programa set isProibido = 1 where idPrograma = ${idPrograma};
    `;

    return database.executarMysql(instrucao);
}



module.exports = {
    entrar,
    cadastrar,
    listar,
    listarMaquinas,
    deletarMaquina,
    deletarUsuario,
    atualizarEmpresa,
    listarProgramasProibidos,
    autorizarPrograma,
    listarProgramasPermitidos,
    bloquearPrograma,
};