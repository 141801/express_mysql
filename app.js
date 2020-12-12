const express = require('express')
const app = express()
const port = 80

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'express_db' //追加	
});


app.get('/', (request, response) => {
	const sql = "select * from users"
	con.query(sql, function (err, result, fields) {
	if (err) throw err;
	response.send(result)
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
