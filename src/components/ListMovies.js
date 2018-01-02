import React from 'react'
import PropTypes from 'prop-types'
import MoviesGrid from './MoviesGrid'
import * as MoviesAPI from '../MoviesAPI'
import '../App.css'


class ListMovies extends React.Component {

    state = {
        query: '',
        showSearchResults: false,
        movies: [],
        genreId: ''
    }

    static propTypes = {
        movies: PropTypes.array.isRequired
    }

    updateQuery = (query) => {

        this.setState( { query: query.trim() })
        document.getElementById("genres").value = ''

        //get all movies that match the input query
        if (query.length > 0) {
            this.setState({showSearchResults: true})

            MoviesAPI.search(query).then((movies) => {
                this.setState({movies})
            })
       } else {
            this.clearQuery(query)
        }
    }

    clearQuery = (query) => {
        this.setState({query: ''})
        this.setState({showSearchResults: false})
    }


    handleChange = (event) => {

        this.setState({genreId: event.target.value})
        let genreMovies = []
        this.clearQuery('')

        this.props.movies.map ( movie => {
            if (movie.genre_ids.find(x => x == event.target.value) > 0) {
                genreMovies.push(movie)
            }
        })

        this.setState({movies: genreMovies})
        this.setState({showSearchResults: true})
    }


    render() {

        return (
            <div className="app">

                <div className="list-movies-title">
                    <h1>Movies!</h1>
                </div>

                <div className='search-bar'>

                    <span className="sbx-custom">
                        <input
                            className='sbx-custom__input'
                            type='text'
                            placeholder='Search by movie title'
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </span>
                    <span className="styled-select slate ">
                    <select name="genres" id="genres"
                            onChange={(event) => this.handleChange(event)}>

                        <option value="">Search by Genre</option>

                        {this.props.genres.map((genre, index) => (
                            <option key={index} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                    </span>
                </div>
                { this.state.showSearchResults ?   (
                    <div className="search-movies-results">
                        <ol className="movies-grid">
                            <MoviesGrid
                                movies={this.state.movies}
                                base_url={this.props.base_url}
                                size={this.props.size}
                            />
                        </ol>
                    </div>
                ) : (
                    <div className="list-movies">

                        <div className="list-movies-content">
                            <div>
                                <div className="movieshelf">
                                    <div className="movieshelf-movies">

                                        <MoviesGrid
                                            movies={this.props.movies}
                                            base_url={this.props.base_url}
                                            size={this.props.size}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}


export default ListMovies


