var mysql_demo = require('mysql');
var TEST_DATABASE = 'nodejs';
var TEST_TABLE = 'node_user';
//创建连接
var client = mysql_demo.createConnection({
    user: 'root',
    password: '123456',
});
var result = "";
client.connect();
client.query("use " + TEST_DATABASE);
client.query(
    'SELECT * FROM ' + TEST_TABLE,
    function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        if (results) {
            for (var i = 0; i < results.length; i++) {
                result += results[i].id+"|"+results[i].name+"|"+results[i].age;
                //console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].age);
            }
        }
        client.end();
    }
);
console.log(result)