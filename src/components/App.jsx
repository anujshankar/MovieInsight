import React, { Component } from 'react'
import MovieList from './MovieList.jsx'
import loader from '../images/loader.svg'
const axios = require('axios')

class App extends Component {
  constructor () {
    super()
    this.state = {
      movies: [],
      actors: [],
      filter: 'All'
    }
  }

  filterUpdate (e) {
    this.setState({filter: e.target.value})
  }

  render () {
    if (this.state.movies.length === 0) {
      return (<img src={loader} className="App-loader" alt="loader" />)
    }

    const actorDropDownData = this.state.actors.map((item, index) => {
      return (<option
                key={index}
                value={item}>
              {item}
            </option>)
    })

    return (
      <div className='App'>
        <h1> This Week Movies </h1>
        <div className='filter'>
           Filter by Actors
           <select onChange={this.filterUpdate.bind(this)}>
             <option value='All'>All</option>
             {actorDropDownData}
          </select>
          <MovieList filter={this.state.filter} movies={this.state.movies}/>
        </div>
      </div>
    )
  }

  componentDidMount () {
    axios.get('https://movie-api-atlrumqzze.now.sh/movies-ref')
      .then((res) => {
        const data = res.data
        const actorsArray = []
        data.forEach((element) => {
          element.actors.forEach((actor) => {
            actorsArray.push(actor)
          })
        })
        let uniqueActors = [...new Set(actorsArray)]
        this.setState({ movies: res.data, actors: uniqueActors })
      })
  }
}

export default App
