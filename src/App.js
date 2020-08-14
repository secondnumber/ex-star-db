import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ErrorIndicator from './components/ErrorBoundary/ErrorIndicator/ErrorIndicator';
import SwapiService from './services/api';
import PersonPage from './components/PersonDetails/PersonPage';
import PlanetsPage from './components/PlanetDetails/PlanetsPage';
import StarshipsPage from './components/StarshipDetails/StarshipsPage';
import ItemDetails from "./components/ItemDetails/ItemDetails";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedItem: null,
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
        const { getPerson, getStarship, getPersonImage, getStarshipImage, getPlanetImage } = this.swapiService;

        const {selectedItem} = this.state;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <Router>
            <div>
                <Header />
                <RandomPlanet />
                <ItemDetails itemId={11} getData={getPerson} getImage={getPersonImage} />
                <ItemDetails itemId={5} getData={getStarship} getImage={getStarshipImage} />
            </div>
            </Router>
        );
  }
}