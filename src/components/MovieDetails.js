import React from 'react'
import * as MoviesAPI from '../MoviesAPI'
import { Link } from 'react-router-dom'
import '../App.css'


class MovieDetails extends React.Component {

    state = {
        movie: {},
        movieId: '',
    }

    getMovieDetails() {

        //get itemId from the query URL:
        const params = new URLSearchParams(window.location.search)
        const movieId = params.get('movieId')
        this.setState({movieId})

        MoviesAPI.getMovie(movieId).then(movie => {
           this.setState({movie})
        })

    }


    getValues (items) {
        let str = ''
        for (let item in items) {
            str += `${items[item].name};  `
        }
        return str
    }

    getValue (item) {
       if (typeof item === "undefined" || item == null) {
            return ('')
        } else {
            return (`${item.name}`)
        }
    }

    getBoolean (value) {
        if (typeof value === "undefined" || value == null) {
            return ('')
        } else if (value)
            return (`Yes`)
        else
            return (`No`)
    }

    getCurrency(amount) {
        if (amount > 0)
            return (amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) )
    }

    getDate(date) {
        let d = new Date(date)
        return d.toLocaleDateString()
    }


    render() {

        if (! this.state.movieId) {
            this.getMovieDetails()
        }

        const mv = this.state.movie
        //console.log("movie: ", this.state.movie);

        return (

            <div className="app ">

                <div className="list-movies-title">
                    <span>
                        <Link
                            to="/"
                            onClick={ () => this.props.refresh(this.props.popMovies)}
                            className="home">
                        Home
                    </Link>

                    </span>
                    <span>
                    <h1>Movie Details</h1>
                </span>
                </div>
                <div className="details">
                    <table className="table  movie-table">
                        <thead>
                        <tr>
                            <td className="movie-cover" style={{
                                backgroundImage: `url(${this.props.base_url}${this.props.size}${mv.poster_path})`
                            }}>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="titles">
                                    <h2>"{mv.title}"</h2>

                                    <h4>{mv.tagline}</h4>
                                </div>
                            </td>
                        </tr>
                        </thead>
                    </table>

                    <table className=" table-striped movie-table">
                        <tbody>
                        <tr>
                            <th>Overview</th>
                            <td>{mv.overview}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{mv.status}</td>
                        </tr>
                        <tr>
                            <th>Release date</th>
                            <td>{this.getDate(mv.release_date)}</td>
                        </tr>
                        <tr>
                            <th>Adult?</th>
                            <td>{this.getBoolean(mv.adult)}</td>
                        </tr>
                        <tr>
                            <th>Runtime</th>
                            <td>{mv.runtime}</td>
                        </tr>
                        <tr>
                            <th>Spoken languages</th>
                            <td>{this.getValues(mv.spoken_languages)} </td>
                        </tr>
                        <tr>
                            <th>Video?</th>
                            <td>{this.getBoolean(mv.video)}</td>
                        </tr>
                        <tr>
                            <th>Belongs to collection</th>
                            <td>{this.getValue(mv.belongs_to_collection)}</td>
                        </tr>
                        <tr>
                            <th>Budget</th>
                            <td>{this.getCurrency(mv.budget)}</td>
                        </tr>
                        <tr>
                            <th>Revenue</th>
                            <td>{this.getCurrency(mv.revenue)}</td>
                        </tr>
                        <tr>
                            <th>Genres</th>
                            <td>{this.getValues(mv.genres)}</td>
                        </tr>
                        <tr>
                            <th>Website</th>
                            <td>{mv.homepage}</td>
                        </tr>
                        <tr>
                            <th>Popularity</th>
                            <td>{mv.popularity}</td>
                        </tr>
                        <tr>
                            <th>Vote average</th>
                            <td>{mv.vote_average}</td>
                        </tr>
                        <tr>
                            <th>Vote count</th>
                            <td>{mv.vote_count}</td>
                        </tr>
                        <tr>
                            <th>Production companies</th>
                            <td>{this.getValues(mv.production_companies)}</td>
                        </tr>
                        <tr>
                            <th>Production countries</th>
                            <td>{this.getValues(mv.production_countries)}</td>
                        </tr>
                        <tr>
                            <th>Original title</th>
                            <td>{mv.original_title}</td>
                        </tr>
                        <tr>
                            <th>Original language</th>
                            <td>{mv.original_language}</td>
                        </tr>
                        <tr>
                            <th>Poster path</th>
                            <td>{mv.poster_path}</td>
                        </tr>
                        <tr>
                            <th>Backdrop path</th>
                            <td>{mv.backdrop_path}</td>
                        </tr>
                        <tr>
                            <th>Movie Id</th>
                            <td>{mv.id}</td>
                        </tr>
                        <tr>
                            <th>IMDB movie Id</th>
                            <td>{mv.imdb_id}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default MovieDetails
