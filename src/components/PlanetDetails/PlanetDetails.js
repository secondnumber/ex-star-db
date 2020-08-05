import React, { Component } from 'react';
import './PlanetDetails.css';
import ErrorButton from '../ErrorButton/ErrorButton';
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
            <p>Select a person from a list</p>
          </div>
      );
    }

    const { id, name } = this.state.planet;


    return (
        <div className="d-flex person-block col-8">
          <img className="item-image m-3" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`${name}`}/>
          <div className="d-flex flex-column m-3">
            <h3>{name}</h3>
            <ul className="list-group">

            </ul>
          </div>
        </div>
    );
  }
}