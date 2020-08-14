import React, { Component } from 'react';
import './Planet.css';
import ErrorButton from '../ErrorBoundary/ErrorButton/ErrorButton';
import SwapiService from "../../services/api";

export default class PlanetDetails extends Component {
  swapiService = new SwapiService();

  state = {
    planet: null
  };

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps)  {
      this.updatePlanet();
    }
  }

  updatePlanet() {
    const { planetId } = this.props;
    if (!planetId) {
      return;
    }
    this.swapiService
        .getPlanet(planetId)
        .then((planet) => {
          this.setState({
            planet
          })
        })

  }

  render() {
    if (!this.state.planet) {
      return (
          <div>
            <p>Select a planetfrom a list</p>
          </div>
      );
    }

    const { id, name, population, rotationPeriod, orbitalPeriod, diameter, climate, gravity, terrain } = this.state.planet;


    return (
        <div className="d-flex content-block col-8">
          <img className="item-image m-3" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`${name}`}/>
          <div className="d-flex flex-column m-3">
            <h3 className="item-header">{name}</h3>
            <ul className="list-group">
                <li className="list-group-item">Population: {population}</li>
                <li className="list-group-item">Rotation period: {rotationPeriod}</li>
                <li className="list-group-item">Orbital Period: {orbitalPeriod}</li>
                <li className="list-group-item">Diameter: {diameter}</li>
                <li className="list-group-item">Climate: {climate}</li>
                <li className="list-group-item">Gravity: {gravity}</li>
                <li className="list-group-item">Terrain: {terrain}</li>
            </ul>
          </div>
        </div>
    );
  }
}