const net = require("net");

const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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
    conn.write("Name: CDS")
  });

  return conn;
};

module.exports = { connect };

//extra goodies
    /* move the snake upon connecting
    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);
  
    setInterval(() => {
      conn.write("Move: left");
    }, 1000);
    */