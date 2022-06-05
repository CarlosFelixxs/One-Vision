var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {
    instrucaoSql = `SELECT logSensor, DATE_FORMAT(dataHoraLog, "%H:%I:%S") as dataHoraLog FROM logSensor where fkSensor = ${idSensor}
                        order by idLogSensor desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executarMysql(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {
    instrucaoSql = `SELECT logSensor, DATE_FORMAT(dataHoraLog, "%H:%I:%S") as dataHoraLog FROM logSensor where fkSensor = ${idSensor}
                    order by idLogSensor desc limit 1`;
                    
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executarMysql(instrucaoSql);
}

function acessarIdMaquina(idUsuario) {
    console.log("ACESSEI O Medida MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT idMaquina from Maquina where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}

function quantidadeProgramasRodando(idMaquina) {
    console.log("ACESSEI O Medida MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT COUNT(nomePrograma) as "qtdProgramas" from programa where fkMaquina = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}

function acessarIdComponenteMaquina(idMaquina, nomeComponente){
    console.log("ACESSEI O Medida MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select idComponenteMaquina from componenteMaquina inner join Maquina on fkMaquina = idMaquina 
	    inner join componente on fkComponente = idComponente 
		    where maquina.idMaquina = ${idMaquina} and componente.nomeComponente = '${nomeComponente}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}

function acessarTotalComponenteMaquina(idMaquina, nomeComponente){
    console.log("ACESSEI O Medida MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select totalComponente from componenteMaquina inner join Maquina on fkMaquina = idMaquina 
	    inner join componente on fkComponente = idComponente 
		    where maquina.idMaquina = ${idMaquina} and componente.nomeComponente = '${nomeComponente}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}


function acessarConsumoComponente(idComponenteMaquina) {
    console.log("ACESSEI O Medida MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT consumo from registroComponente where fkComponenteMaquina = ${idComponenteMaquina} order by idRegistroComponente desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}

function acessarUltimosRegistrosComponente(idComponenteMaquina) {
    console.log("ACESSEI O Medida MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        select top 5 consumo from registroComponente where fkComponenteMaquina = '${idComponenteMaquina}' order by idRegistroComponente desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}

function acessarHoraRegistrosComponente(idComponenteMaquina) {
    console.log("ACESSEI O Medida MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        select top 10
        consumo,
            DATEPART(hour, dataHora) as 'hora',
                DATEPART(minute, dataHora) as 'minuto',
                    DATEPART(second, dataHora) as 'segundo' from registroComponente 
                        where fkComponenteMaquina = '${idComponenteMaquina}' order by idRegistroComponente desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}

function acessarProgramasConsumoCPU(idMaquina) {
    console.log("ACESSEI O Medida MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        select top 10
            nomePrograma, consumoCPU from programa
                inner join registroPrograma on idPrograma = 
                    fkPrograma where programa.fkMaquina = ${idMaquina} 
                        order by registroPrograma.consumoCPU desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}

function acessarProgramasConsumoMemoria(idMaquina) {
    console.log("ACESSEI O Medida MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        select top 10
            nomePrograma, consumoMemoria from programa
                inner join registroPrograma on idPrograma = 
                    fkPrograma where programa.fkMaquina = ${idMaquina} 
                        order by registroPrograma.consumoMemoria desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarMysql(instrucao);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    acessarIdMaquina,
    quantidadeProgramasRodando,
    acessarIdComponenteMaquina,
    acessarConsumoComponente,
    acessarTotalComponenteMaquina,
    acessarUltimosRegistrosComponente,
    acessarHoraRegistrosComponente,
    acessarProgramasConsumoCPU,
    acessarProgramasConsumoMemoria,
}