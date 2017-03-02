import React from 'react'
import Movie from './Movie.jsx'

const MovieList = (props) => {
  let filteredMovies = []
  if (props.filter === 'All') {
    filteredMovies = props.movies
  } else {
    props.movies.forEach((element) => {
      element.actors.forEach((actor) => {
        if (actor === props.filter) {
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

export default MovieList
