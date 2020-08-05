import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ItemList from './components/ItemList/ItemList';
import PersonDetails from './components/PersonDetails/PersonDetails';
import ErrorButton from './components/ErrorButton/ErrorButton';
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator';
import PlanetDetails from './components/PlanetDetails/PlanetDetails';
import StarshipDetails from './components/StarshipDetails/StarshipDetails';
import {Universe} from './components/Test';
import SwapiService from './services/api';
import PersonPage from "./components/PersonDetails/PersonPage";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedItem: 4,
        hasError: false,
    };

    onItemSelected = (id) => {
        debugger
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
                    personId={selectedItem}/>
            </div>
        );
  }
}

/*<ItemList onItemSelected={this.onItemSelected} getData={this.swapiService.getAllPlanets}/>
<PlanetDetails planetId={selectedItem}/>
<ItemList onItemSelected={this.onItemSelected} getData={this.swapiService.getAllStarships}/>
<StarshipDetails starshipId={selectedItem}/>*/