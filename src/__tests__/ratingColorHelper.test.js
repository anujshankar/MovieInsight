const getRatingColor = require('../helperFunctions/ratingColorHelper')
const chai = require('chai')
const expect = chai.expect

describe('rating color helper with valid rating between 1 to 5', () => {
  it('should return red', () => {
    expect(getRatingColor(1)).to.eqls('red')
  })

  it('should return blue', () => {
    expect(getRatingColor(3)).to.eqls('blue')
  })

  it('should return green', () => {
    expect(getRatingColor(5)).to.eqls('green')
  })
})

describe('rating color helper with invalid input ', () => {
  it('should return an error', () => {
    expect(getRatingColor(100)).to.eqls('should be in valid range of 1-5')
  })
})
