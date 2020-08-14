import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ErrorIndicator from './components/ErrorBoundry/ErrorIndicator/ErrorIndicator';
import SwapiService from './services/api';
import PersonPage from './components/PersonDetails/PersonPage';
import PlanetsPage from './components/PlanetDetails/PlanetsPage';
import StarshipsPage from './components/StarshipDetails/StarshipsPage';

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
        const {selectedItem} = this.state;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <Router>
            <div>
                <Header />
                <RandomPlanet />
                <Switch>
                <Route exact path="/">
                <PersonPage
                    onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getAllPeople}
                    personId={selectedItem}
                    renderItem={({name}) => `${name}`}
                />
                </Route>
                <Route exact path="/planets">
                <PlanetsPage
                    onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getAllPlanets}
                    planetId={selectedItem}
                    renderItem={({name}) => `${name}`}
                />
                </Route>
                <Route exact path="/starships">
                    <StarshipsPage
                        onItemSelected={this.onItemSelected}
                        getData={this.swapiService.getAllStarships}
                        starshipId={selectedItem}
                        renderItem={({name}) => `${name}`}
                    />
                </Route>
                </Switch>
            </div>
            </Router>
        );
  }
}