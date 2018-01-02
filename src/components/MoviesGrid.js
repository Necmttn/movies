import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class MoviesGrid extends Component {


    render() {

        return (

            <ol className="movies-grid">

                {this.props.movies.map((movie, index) => (

                    <Link
                        to={`/details?movieId=${movie.id}`}
                        key={index}
                    >
                        <li key={movie.index}>
                            <div className="movie">
                                <div className="movie-top">
                                    <div className="movie-cover" style={{
                                        backgroundImage: `url(${this.props.base_url}${this.props.size}${movie.poster_path})`
                                    }}>
                                    </div>
                                </div>
                                <div className="movie-title">{movie.title}</div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ol>
        )
    }
}



export default MoviesGrid


