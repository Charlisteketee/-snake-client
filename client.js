const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541,// PORT number here,
  });
  
  // handle incoming data and console.log it
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // register a "connect" handler and message the player to see "sucessfully connected to game server"
  conn.on("connection", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: CDS")
  })

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };