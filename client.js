const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541,// PORT number here,
  });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");

  // handle incoming data and console.log it
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // register a "connect" handler and message the player to see "sucessfully connected to game server"
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: CDS")
    
    /* move the snake upon connecting
    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);
  
    setInterval(() => {
      conn.write("Move: left");
    }, 1000);
    */
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };