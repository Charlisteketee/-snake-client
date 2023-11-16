// stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  // set the connection variable
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // register the handleUserInput function as the "data" callback handler for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

// check if the received key is the Ctrl+C combination (\u0003):
// If it is, terminate the game using process.exit()
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'c') {
    connection.write("Say: Woohoooo!");
  } else if (key === 'g') {
    connection.write("Say: Good job!");
  } else if (key === 'i') {
    connection.write("Say: I'm the besssst");
  }
};

module.exports = { setupInput };