// Set up MySQL connection.
var mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else connection = mysql.createConnection({
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "mweh2p3wktnlrtc4",
    password: "yplen0tudyy1o82i",
    database: "i7jpxpjtipixpsex"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;