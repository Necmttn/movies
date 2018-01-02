
const headers = {
    'Accept': 'application/json'
}

const api_key = `5b19221d20b929615d236692cea743e4`

//get popular movies
export const getAllMovies = () =>
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`, { headers })
        .then(res => res.json())
        .then(data => data.results);


//Get images information from configuration
export const getConfiguration = () =>
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`, { headers })
        .then(res => res.json())
        .then(data => data)

//get Genres
export const getGenres = () =>
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-U`, {headers})
        .then(res => res.json())
        .then(data => data.genres)


//search movies
const search_api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=`
const api2 = `&page=1&include_adult=false`

export const search = (query) =>
    fetch(`${search_api}${query}${api2}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    }).then(res => res.json())
        .then(data => data.results)

//get movie details
export const getMovie = (movieId) =>
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`,{headers})
        .then(res => res.json())
        .then(data => data)


