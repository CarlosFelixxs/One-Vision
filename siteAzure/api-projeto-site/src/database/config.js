var mysql = require("mysql2");
var sql = require('mssql');

// CONEXÃO DO SQL SERVER - AZURE (NUVEM)
 var sqlServerConfig = {
     user: "admin-projeto-onevision",
     password: "2ads@grupo1",  
     database: "bd-projeto-onevision",
     server: "svr-projeto-onevision.database.windows.net",
     pool: {
         max: 10,
         min: 0,
         idleTimeoutMillis: 30000
     },
     options: {  
         encrypt: true, // for azure
     }
 }

// CONEXÃO DO MYSQL WORKBENCH (LOCAL)
//var mySqlConfig = {
//    database: "onevision",
//    host: "localhost",
//    user: "root",
//    password: "YES",
//};

 function executarMysql(instrucao) {
     // VERIFICA A VARIÁVEL DE AMBIENTE SETADA EM app.js
     if (process.env.AMBIENTE_PROCESSO == "producao") {
         return new Promise(function (resolve, reject) {
             sql.connect(sqlServerConfig).then(function () {
                 return sql.query(instrucao);
             }).then(function (resultados) {
                 console.log(resultados);
                 resolve(resultados.recordset);
             }).catch(function (erro) {
                 reject(erro);
                 console.log('ERRO: ', erro);
             });
             sql.on('error', function (erro) {
                 return ("ERRO NO SQL SERVER (Azure): ", erro);
              });
         });
     } else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){    
         return new Promise(function (resolve, reject) {
             var conexao = mysql.createConnection(mySqlConfig);
             conexao.connect();
             conexao.query(instrucao, function(erro, resultados) {
                 conexao.end();
                 if (erro) {
                     reject(erro);
                 }                      
                 console.log(resultados);
                 resolve(resultados);    
             });
             conexao.on('error', function (erro) {
                 return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
             });
         });
     } else {
         return new Promise(function (resolve, reject) {
             console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
             reject ("AMBIENTE NÃO CONFIGURADO EM app.js")
         });
     }
 }

//  function executarMysql(instrucao){
//      return new Promise(function (resolve, reject) {
//          var conexao = mysql.createConnection(mySqlConfig);
//          conexao.connect();
//          conexao.query(instrucao, function(erro, resultados) {
//              conexao.end();
//              if (erro) {
//                  reject(erro);
//              }                      
//              console.log(resultados);
//              resolve(resultados);    
//          });
//          conexao.on('error', function (erro) {
//              return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
//          });
//      });
//  }

module.exports = {
    executarMysql
}