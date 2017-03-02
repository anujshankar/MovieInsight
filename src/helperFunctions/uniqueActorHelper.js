function getUniqueActors (data) {
  const actorsArray = []
  if (data instanceof Array === false) {
    return 'Data should be an Array of Objects'
  }

  if (data.length === 0) {
    return 'Data Array of objects is empty'
  }

  data.forEach((element) => {
    element.actors.forEach((actor) => {
      actorsArray.push(actor)
    })
  })
  const uniqueActors = [...new Set(actorsArray)]
  return uniqueActors
}

module.exports = getUniqueActors
