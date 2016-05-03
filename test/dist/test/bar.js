const assert = require('assert')

const bar = require('../../../src/bar')

describe('bar', () => {
  it('is bar', () => {
    assert.equal(bar, 'bar')
  })
})
