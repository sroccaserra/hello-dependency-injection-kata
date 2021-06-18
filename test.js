const { expect } = require('chai');

const { main, sonde, config } = require('./index');

describe('Hello Feature', function() {
  it('prints the message', function() {
    config.isInATest = true;
    main()
    expect(sonde).to.deep.equal(["Hello Dependency Injection"]);
    config.isInATest = true;
  });
});
