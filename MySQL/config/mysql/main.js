const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'demo',
  password: 'Test1234#',
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected!');
    con.query('CREATE DATABASE IF NOT EXISTS `www`', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('database created');
      }
    });
    // first database then table //VARCHAR any character mysql doest know string // NOT NULL == required
    con.query(
      `CREATE TABLE IF NOT EXISTS \`www\`.\`users\` (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(30) NOT NULL,
        fullname VARCHAR(30) NOT NULL,
        password VARCHAR(50) NOT NULL)`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log('table created');
        }
      }
    );
    // * == everything
    /*  con.query(
      `SELECT table_name FROM information_schema.tables WHERE table_schema = \`www\``,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log('table created');
        }
      }
    ); */
    con.query(`SELECT * FROM www.users`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });

    con.query(
      ` INSERT INTO www.users(username, fullname, password) VALUES ('adminuser','admin','admin')`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  }
});

//ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';
//sudo mysql -u root -p
//sudo mysql_secure_installation

// to run code => node main.js
