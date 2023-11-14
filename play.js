const net = require("net");
// import connect function
const { connect } = require("./client");
/*
client.setEncoding("utf8"); // interpret data as text
client.on("data", (data) => {
  console.log("Message from client: ", data);
});
*/

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

// check if the received key is the Ctrl+C combination (\u0003):
// If it is, terminate the game using process.exit()
const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };