// [X] On veut que ça imprime "Hello DI" au lieu de "Hello Dependency Injection"

function main(messageWriter = new MessageWriter()) {
  const message = "Hello DI";
  messageWriter.write(message);
}

class MessageWriter {
  write(message) {
    console.log(message);
  }
}

main();

module.exports = {
  main,
  MessageWriter,
};
