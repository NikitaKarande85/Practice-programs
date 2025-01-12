var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'test'
});

con.connect(function(err) {
  if (err) throw err;
  con.query('select * from learnnode', function (err, result) {
    if (err) throw err;
    console.log("Result: ",result);
  });
});