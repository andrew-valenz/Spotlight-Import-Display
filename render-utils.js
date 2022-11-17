export function renderMovie(movie) {
    const div = document.createElement('div');
    div.classList.add('movies');

    const h2 = document.createElement('h2');
    h2.textContent = movie.name;

    const genre = document.createElement('p');
    genre.textContent = `${movie.name} is a ${movie.genre}`;

    const stars = document.createElement('p');
    stars.textContent = `${movie.name} has the actor ${movie.stars}`;

    const language = document.createElement('p');
    language.textContent = `${movie.name} is spoken in ${movie.language}`;

    div.append(h2, genre, stars, language);
    return div;
}

export function renderPlace(place) {
    const div = document.createElement('div');
    div.classList.add('places');

    const country = document.createElement('h2');
    country.textContent = place.country;

    const city = document.createElement('p');
    city.textContent = place.city;

    const code = document.createElement('p');
    code.textContent = place.code;

    const zone = document.createElement('p');
    zone.textContent = place.zone;

    div.append(country, city, code, zone);
    return div;
}

export function renderCar(car) {
    const div = document.createElement('div');
    div.classList.add('cars');

    const name = document.createElement('h2');
    name.textContent = car.name;

    const model = document.createElement('p');
    model.textContent = car.model;

    const year = document.createElement('p');
    year.textContent = car.year;

    const colors = document.createElement('ul');
    colors.textContent = car.color;
    for (let color of colors) {
        const li = document.createElement('li');
        li.textContent = color;
        colors.append(li);
    }
    div.append(name, model, year, colors);
    return div;
}
