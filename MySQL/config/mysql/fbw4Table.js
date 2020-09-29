const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'demo',
  password: 'Test1234#',
});

con.connect((err) => {
  if (err) {
    console.log(err.sqlMessage);
  } else {
    console.log('connected to mysql!');
    con.query(
      `CREATE TABLE IF NOT EXISTS \`www\`.\`FBW4_Participants\` (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            lastname VARCHAR(50) NOT NULL)`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log('table created');
        }
      }
    );
  }
  let info = [
    { name: 'Ali', lastname: 'Alhayek' },
    { name: 'Andri', lastname: 'G' },
    { name: 'Clemens', lastname: 'B' },
    { name: 'Eren', lastname: 'Yilmaz' },
    { name: 'Javier', lastname: 'M' },
  ];

  info.forEach((participants) => {
    let sql = `INSERT INTO www.FBW4_Participants(name,lastname) VALUES  ('${participants.name}', '${participants.lastname}')`;

    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Participants ${participants.name} was added`);
      }
    });
  });
  con.query(`SELECT * FROM www.FBW4_Participants`, (err, result) => {
    if (err) {
      console.log(err.splMessage);
    } else {
      console.log(result);
    }
  });
});
