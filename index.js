module.exports = {
  main,
};

function main(writeMessageFunction = writeMessage) {
  const message = "Hello DI";
  writeMessageFunction(message);
}

function writeMessage(message) {
  console.log(message);
}

main();
