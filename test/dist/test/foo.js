const assert = require('assert')

const foo = require('../../../src/foo')

describe('foo', () => {
  it('is foo', () => {
    assert.equal(foo, 'foo')
  })
})
