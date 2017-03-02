import React, { Component } from 'react'
import '../css/movie.css'

class Movie extends Component {
  render () {
    // flex
    const theme = {
      backgroundColor: this.props.theme,
      width: 10,
      height: 100,
      marginBottom: 10
    }

    const actorsList = this.props.actors.map((item) => {
      return <li>{item}</li>
    })

    return (
      <div className="movie">
        <div style={theme}></div>
        <div className="movie-data">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
          <ul>
            {actorsList}
          </ul>
          <p>Released On: {this.props.releaseDate}</p>
        </div>
      </div>
    )
  }
}

export default Movie
