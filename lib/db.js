let mysql = require('mysql');
let connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'filesimportation'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;