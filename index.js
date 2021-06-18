// On veut que ça imprime "Hello DI" au lieu de "Hello Dependency Injection"

const config = { isInATest: false };
const sonde = [];

function main() {
  let message = "Hello Dependency Injection"
  let messageWriter = new MessageWriter();
  messageWriter.write(message)
}

class MessageWriter {
  write(message) {
    if (config.isInATest) {
      sonde.push(message);
    }
    else {
      console.log(message);
    }
  }
}

main()

module.exports = {
  main,
  sonde,
  config,
};
