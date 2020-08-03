export default class SwapiService {

    _apiBaseUrl = 'https://swapi.dev/api';

    async getResource(url) {
        const responce = await fetch(`${this._apiBaseUrl}${url}`);
        if (!responce.ok) {
            throw new Error(`Could not fetch ${url} ,received ${responce.status}`);
        }
        return await responce.json();
    }

    async getAllPeople() {
        const responce = await this.getResource(`/people/`);
        return responce.results.map((this._transformPlanet));
    }

    async getAllPlanets() {
        const responce = await this.getResource(`/planets/`);
        return responce.results;
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starship/${id}`);
        return this._transformStarship(starship);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        return this._transformPlanet(planet, imageUrl);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet, imageUrl) {
        return {
            id: this._extractId(planet),
            image: imageUrl,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufactured: starship.manufactured,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }
}