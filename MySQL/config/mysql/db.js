const mysql = require('mysql');
const util = require('util');

const con = mysql.createPool({
  host: 'localhost',
  user: 'demo',
  password: 'Test1234#',
  database: 'www',
});

//This function test the connection to the database
con.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  }
  if (connection) {
    connection.release();
  }

  return;
});

// converts qurey to promise
con.query = util.promisify(con.query);

module.exports = con;
