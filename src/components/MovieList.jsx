import React, { Component } from 'react'
import Movie from './Movie.jsx'

class MovieList extends Component {
  render () {
    let filteredMovies = []
    if (this.props.filter === 'All') {
      filteredMovies = this.props.movies
    } else {
      this.props.movies.forEach((element) => {
        element.actors.forEach((actor) => {
          if (actor === this.props.filter) {
            filteredMovies.push(element)
          }
        })
      })
    }

    const filteredMoviesList = filteredMovies.map((item) => {
      return <Movie
                key={item.id}
                releaseDate={item.releaseDate}
                name={item.name}
                description={item.description}
                rating={item.rating}
                theme={item.theme}
                actors={item.actors}
             />
    })

    return (
      <div className='movieList'>
        {filteredMoviesList}
      </div>
    )
  }
}

export default MovieList
