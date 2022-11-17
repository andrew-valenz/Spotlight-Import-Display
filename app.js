/* Imports */
import { fetchMovies, fetchPlaces } from './fetch-utils.js';
import { renderMovie, renderPlace } from './render-utils.js';

/* Get DOM Elements */
const movieList = document.getElementById('movie-list');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const movies = await fetchMovies();
    for (let movie of movies) {
        const movieEl = renderMovie(movie);
        movieList.append(movieEl);
    }
});

const placeList = document.getElementById('place-list');

window.addEventListener('load', async () => {
    const places = await fetchPlaces();
    for (let place of places) {
        const placeEl = renderPlace(place);
        placeList.append(placeEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
