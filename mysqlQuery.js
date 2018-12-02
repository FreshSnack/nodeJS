var mysql  = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port: '3306',
    database: 'nodejs',
});

function mysqlQuery(){
    //检索
    this.select=function(callback){
        var sql = 'SELECT distinct * FROM node_user';
        connection.query(sql,function(err,result){
            if(err){console.log(err)}
            callback(result); // 此处直接返回 return 返回undefined, 需要使用回调函数来接收数据。
        })
    };
}
module.exports = mysqlQuery;
////////////////////////////////////////调用的场合////////////////////////
var mqt = new mysqlQuery();
mqt.select(processData);

function processData(rows){
    rows.forEach(function (item,index) {
        console.log(item)
    });
    //res.send(dom);
}