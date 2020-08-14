export default class SwapiService {

    _apiBaseUrl = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img/';

    getResource = async (url) => {
        const responce = await fetch(`${this._apiBaseUrl}${url}`);
        if (!responce.ok) {
            throw new Error(`Could not fetch ${url} ,received ${responce.status}`);
        }
        return await responce.json();
    }

    getAllPeople = async () => {
        const responce = await this.getResource('/people/');
        return responce.results;
    }

    getAllPlanets = async () => {
        const responce = await this.getResource('/planets/');
        return responce.results;
    }

    getAllStarships = async () => {
        const responce = await this.getResource('/starships/');
        return responce.results;
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        return this._transformPlanet(planet, imageUrl);
    }

    getPersonImage = ({id}) => {
        return `${this._imageBase}characters/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._imageBase}starships/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imageBase}planets/${id}.jpg`
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet, imageUrl) => {
        return {
            id: this._extractId(planet),
            image: imageUrl,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            orbitalPeriod: planet.orbital_period,
            diameter: planet.diameter,
            climate: planet.climate,
            gravity: planet.gravity,
            terrain: planet.terrain,
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            mglt: starship.MGLT,
            model: starship.model,
            manufactured: starship.manufactured,
            costInCredits: starship.cost_in_credits,
            hyperdriveRating: starship.hyperdrive_rating,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        debugger
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            height: person.height,
            mass: person.mass,
            eyeColor: person.eye_color,
            skinColor: person.skin_color,
            hairColor: person.hair_color,
        }
    }
}