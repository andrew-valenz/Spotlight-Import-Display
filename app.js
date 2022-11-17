/* Imports */
import { fetchMovies, fetchPlaces, fetchCars } from './fetch-utils.js';
import { renderMovie, renderPlace, renderCar } from './render-utils.js';

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

const carList = document.getElementsById('car-list');

window.addEventListener('load', async () => {
    const cars = await fetchCars();
    for (let car of cars) {
        const carEl = renderCar(car);
        carList.append(carEl);
    }
});
