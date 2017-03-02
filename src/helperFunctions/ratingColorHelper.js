function getRatingColor (rating) {
  let ratingColor
  if (rating === 5) {
    ratingColor = 'green'
  } else if (rating === 3 || rating === 4) {
    ratingColor = 'blue'
  } else if (rating === 1 || rating === 2) {
    ratingColor = 'red'
  } else {
    ratingColor = 'should be in valid range of 1-5'
  }
  return ratingColor
}

module.exports = getRatingColor
