var database = require("../database/config")


function listarTemperaturaMaxima() {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            max(LogSensor) as 'Maiortemperaturadodia' 
                FROM logSensor 
                    where fkSensor = 1010112 
                        and DataHoraLog >= CAST(GETDATE() AS DATE)`;
                        
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executarMysql(instrucao);

}
function listarTemperaturaMinima(){
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
        min(logSensor) as 'Menortemperaturadodia'
        From logSensor
        where fksensor = 1010112
        and DataHoraLog >= CAST(GETDATE() AS DATE)`;

        console.log("Executando a instrução SQL: \N"+instrucao);
        return database.executarMysql(instrucao);
}
function listarTurbidezMaxima(){
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
        max(logSensor) as 'Maiorturbidezdodia'
        From logSensor
        where fksensor = 1010111
        and DataHoraLog >= CAST(GETDATE() AS DATE)`;

        console.log("Executando a instrução SQL: \N"+instrucao);
        return database.executarMysql(instrucao);
}
function listarTurbidezMinima(){
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
        min(logSensor) as 'Menorturbidezdodia'
        From logSensor
        where fksensor = 1010111
        and DataHoraLog >= CAST(GETDATE() AS DATE)`;

        console.log("Executando a instrução SQL: \N"+instrucao);
        return database.executarMysql(instrucao);
}
module.exports = {
    listarTemperaturaMaxima,listarTemperaturaMinima,listarTurbidezMaxima,listarTurbidezMinima
};