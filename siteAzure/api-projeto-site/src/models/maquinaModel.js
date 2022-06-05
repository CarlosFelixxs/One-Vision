var database = require("../database/config");

function acessarIdMaquina(idUsuario) {
    console.log("ACESSEI O Maquina MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT idMaquina from Maquina where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}

function quantidadeProgramasRodando(idMaquina) {
    console.log("ACESSEI O Maquina MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT COUNT(nomePrograma) as "qtdProgramas" from programa where fkMaquina = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}


module.exports = {
    acessarIdMaquina,
    quantidadeProgramasRodando
};