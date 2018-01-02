import React from 'react'
import { Route } from 'react-router-dom'
import ListMovies from './ListMovies'
import MovieDetails from './MovieDetails'
import * as MoviesAPI from '../MoviesAPI'
import '../App.css'


class MoviesApp extends React.Component {

    state = {
        popMovies: [],
        movies: [],
        base_url: '',
        size: '',
        genres: [],
        movie: {}
    }

    componentDidMount() {

        MoviesAPI.getAllMovies().then((popMovies) => {
            this.setState({popMovies})
        })

        //get configuration
        MoviesAPI.getConfiguration().then((data) => {

            //convert HTTP to HTTPS to avoid "mixed content" issues
            this.setState({base_url: data.images.base_url.substr(0, 4) + 's' + data.images.base_url.substr(4)})
            this.setState({size: data.images.poster_sizes[1]})
        })

        //get Genres
        MoviesAPI.getGenres().then((genres) => {
            this.setState({genres})
        })
    }


    render () {

        return (

            <div className='app'>
                <Route exact path="/" render={ ( ) => (
                    <ListMovies
                        movies={this.state.popMovies}
                        base_url={this.state.base_url}
                        size={this.state.size}
                        genres={this.state.genres}
                    />
                )}/>
                <Route path="/details" render= { (  ) => (
                    <MovieDetails
                        base_url={this.state.base_url}
                        size={this.state.size}
                        genres={this.state.genres}
                        movie={(this.state.movie)}
                    />
                )} />
            </div>
        )
    }
}

export default MoviesApp

