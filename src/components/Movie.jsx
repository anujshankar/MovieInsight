import React, { Component } from 'react'
import '../css/movie.css'
const moment = require('moment')
const getRatingColor = require('../helperFunctions/ratingColorHelper')

class Movie extends Component {
  render () {
    const theme = {
      backgroundColor: this.props.theme,
      width: 20,
      height: 290
    }

    const actorsList = this.props.actors.map((item, index) => {
      return <li key={index}>{item}</li>
    })

    const ratingColor = getRatingColor(this.props.rating)
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
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
          <h3>Actors:</h3>
          <ul>
            {actorsList}
          </ul>
          <p>Released On: {moment(this.props.releaseDate).format('Do MMMM YYYY')}</p>
        </div>
        <div style={ratingStyle}>{this.props.rating}/5</div>
      </div>
    )
  }
}

export default Movie
