const { expect } = require('chai');

const { main, MessageWriter } = require('./index');

class TestMessageWriter extends MessageWriter {
  write(message) {
    this.message = message;
  }
}

describe('Hello Feature', function() {
  it('prints the message', function() {
    // Given
    const messagerWriter = new TestMessageWriter();

    // When
    main(messagerWriter);

    // Then
    expect(messagerWriter.message).to.deep.equal("Hello DI");
  });
});
