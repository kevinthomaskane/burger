var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgersDB",
  typeCast: function castField( field, useDefaultTypeCasting ) {
    if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {
        var bytes = field.buffer();
        return( bytes[ 0 ] === 1 );
    }
    return( useDefaultTypeCasting() );
  }
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
