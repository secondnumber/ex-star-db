import React, { Component } from 'react';
import './RandomPlanet.css';
import SwapiService from "../../services/api";
import Spinner from "../Spinner/Spinner";
import PlanetView from "./PlanetView";
import ErrorIndicator from "../ErrorBoundary/ErrorIndicator/ErrorIndicator";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    constructor() {
        super();
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 9000000000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
        })
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet = () => {
        const randomId = Math.floor(Math.random() * 14) + 3;
        this.swapiService
            .getPlanet(randomId)
            .then((result) => this.onPlanetLoaded(result))
            .catch(this.onError);
    }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorIndicator = error ? <ErrorIndicator/> : null;
    const spinner = loading  ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
        <div>
            {spinner}
            {content}
            {errorIndicator}
        </div>
    )
  }
}
