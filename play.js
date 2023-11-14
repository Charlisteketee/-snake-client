const net = require("net");
// import connect function
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();

// pass the connection object to setUpInput
setupInput(connection);

module.exports = { setupInput };