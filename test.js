const sinon = require('sinon');
const { expect } = require('chai');

const { main } = require('./index');

it('writes the message', function() {
  // given
  const writeMessageMock = sinon.mock();
  // when
  main(writeMessageMock);
  // then
  sinon.assert.calledWith(writeMessageMock, "Hello DI")
});
