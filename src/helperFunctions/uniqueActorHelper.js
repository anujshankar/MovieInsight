function getUniqueActors (data) {
  const actorsArray = []
  data.forEach((element) => {
    element.actors.forEach((actor) => {
      actorsArray.push(actor)
    })
  })
  const uniqueActors = [...new Set(actorsArray)]
  return uniqueActors
}

module.exports = getUniqueActors
