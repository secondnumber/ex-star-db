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
import ItemDetails, {Record} from "./components/ItemDetails/ItemDetails";
import ItemList from "./components/ItemList/ItemList";

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
        const { getAllPeople, getPerson, getStarship, getPlanet, getPersonImage, getStarshipImage, getPlanetImage } = this.swapiService;

        const {selectedItem} = this.state;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <Router>
            <div>
                <Header />
                <RandomPlanet />
                <ItemList
                    getData={getAllPeople}
                    onItemSelected={this.onItemSelected}
                >
                    {({name}) => <span>{name}</span>}
                </ItemList>
                <ItemDetails
                    itemId={11}
                    getData={getPerson}
                    getImage={getPersonImage}
                >
                 <Record field="gender" label="Gender" />
                 <Record field="eyeColor" label="Eye color" />
                </ItemDetails>
                <ItemDetails
                    itemId={5}
                    getData={getStarship}
                    getImage={getStarshipImage}
                >
                    <Record field="model" label="Model" />
                    <Record field="length" label="Length" />
                </ItemDetails>
                <ItemDetails
                    itemId={4}
                    getData={getPlanet}
                    getImage={getPlanetImage}
                    >
                    <Record field="mass" label="Mass" />
                    <Record field="population" label="Population" />
                </ItemDetails>
            </div>
            </Router>
        );
  }
}