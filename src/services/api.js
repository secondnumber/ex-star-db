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
        const responce = await this.getResource(`/people`);
        return responce.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`)
    }
}