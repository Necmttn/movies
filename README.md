## Movie Discovery Web App - React Project

This is a React web application that explores popular movies using The Movie Database API (https://developers.themoviedb.org/3/movies).

### Project Description

#### Home Page
 
 This page displays a grid of popular movies (images and titles). You can also search for movies by Genres, or enter a search string into the search box.
 
 When you click on a movie image or movie title you are taken to the details page, where the movie details are displayed.
 
#### Search features 

 There are two ways to search the movies in the database:
  
  * Entering text into the search box: as the value of the text input changes, the movies that match that query are displayed on the page    
  * Selecting a 'Genre' from the dropdown select box
  
#### Details page

This pages displays information about the movie, such as: title, tagline, poster image, movie description, release status and date, revenue, run time, votes count, production companies, languages, production countries, and more.  

 
 #### React Features
 
This app was created with "create-react-app" and uses "react-router" for routing and managing requests.

#### APIs used


##### `getAllMovies()`

* Returns a collection of popular movies objects.


##### `getConfiguration()`

* Returns the configuration information needed to retreive movie poster images.

##### `search(query)`
* query: `<String>`
* Returns a collection of movie objects.

##### `getGenre()`

* Returns a collection of Genres.

##### `getDetails(movieId)`
* movieId: `<number>`
* Returns a collection of detailed information for a movie.

## Installing and Launching the Project 

The application requires the following steps to get it installed and launched:

* npm install 
* npm start 


## movies
# movies
# movies
# movies
# movies
# movies
# moviesDB
# movies
