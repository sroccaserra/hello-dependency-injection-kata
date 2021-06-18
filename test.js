const { expect } = require('chai');

const { main, MessageWriter } = require('./index');

class TestMessageWriter extends MessageWriter {
  constructor() {
    super();
    this.sonde = [];
  }
  write(message) {
    this.sonde.push(message);
  }
}

describe('Hello Feature', function() {
  it('prints the message', function() {
    const testMessageWriter = new TestMessageWriter()
    main(testMessageWriter);
    expect(testMessageWriter.sonde).to.deep.equal(["Hello Dependency Injection"]);
  });
});
