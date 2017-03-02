import React from 'react'
import '../css/movie.css'
const moment = require('moment')
const getRatingColor = require('../helperFunctions/ratingColorHelper')

const Movie = (props) => {
  const theme = {
    backgroundColor: props.theme,
    width: 20,
    height: 290
  }

  const actorsList = props.actors.map((item, index) => {
    return <li key={index}>{item}</li>
  })

  const ratingColor = getRatingColor(props.rating)
  const ratingStyle = {
    backgroundColor: ratingColor,
    width: 30,
    height: 30,
    color: 'white'
  }

  return (
      <div className="movie">
        <div style={theme}></div>
        <div className="movie-data">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <h3>Actors:</h3>
          <ul>
            {actorsList}
          </ul>
          <p>Released On: {moment(props.releaseDate).format('Do MMMM YYYY')}</p>
        </div>
        <div style={ratingStyle}>{props.rating}/5</div>
      </div>
  )
}

export default Movie
