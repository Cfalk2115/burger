var mysql = require('mysql');

// Setting up our connection information
var source = {
    localhost: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "burgers_db"
    }
};

// Creating our connection
var connection = mysql.createConnection(source.localhost);

//Connecting to the database
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;