import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator';
import {Universe} from './components/Test';
import SwapiService from './services/api';
import PersonPage from "./components/PersonDetails/PersonPage";
import PlanetsPage from "./components/PlanetDetails/PlanetsPage";
import StarshipsPage from "./components/StarshipDetails/StarshipsPage";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedItem: 5,
        hasError: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const {selectedItem} = this.state;
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PersonPage
                    onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getAllPeople}
                    personId={selectedItem}
                    renderItem={({name, gender, mass}) => `${name} ${gender} ${mass}`}
                />
                <PlanetsPage
                    onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getAllPlanets}
                    planetId={selectedItem}
                    renderItem={({name, population}) => `${name} ${population}`}
                />
                <StarshipsPage
                    onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getAllStarships}
                    planetId={selectedItem}
                    renderItem={({name}) => `${name}`}
                />
            </div>
        );
  }
}