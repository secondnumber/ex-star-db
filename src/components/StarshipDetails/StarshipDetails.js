import React, { Component } from 'react';
import './Starship.css';
import ErrorButton from '../ErrorBoundary/ErrorButton/ErrorButton';
import SwapiService from "../../services/api";

export default class StarshipDetails extends Component {
  swapiService = new SwapiService();

  state = {
    starship: null
  };

  componentDidMount() {
    this.updateStarship();
    console.log(this.props.starshipId);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps)  {
      this.updateStarship();
    }
  }

  updateStarship() {
    const { starshipId } = this.props;
    if (!starshipId) {
      return;
    }
    this.swapiService
        .getStarship(starshipId)
        .then((starship) => {
          this.setState({
            starship
          })
        })

  }

  render() {
    if (!this.state.starship) {
      return (
          <div>
            <p>Select a starship from a list</p>
          </div>
      );
    }

    const { id, name, mglt, model, manufactured, costInCredits, hyperdriveRating, length, crew, passengers, cargoCapacity} = this.state.starship;


    return (
        <div className="d-flex content-block col-8">
            <div>
                <img className="item-image m-3" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt={`${name}`}/>
                <h3 className="caption-header">{name}</h3>
            </div>
          <div className="d-flex flex-column m-3">
            <ul className="list-group">
                <li className="list-group-item">MGLT: {mglt}</li>
                <li className="list-group-item">Model: {model}</li>
                <li className="list-group-item">Manufactured: {manufactured}</li>
                <li className="list-group-item">Cost in credits: {costInCredits}</li>
                <li className="list-group-item">Hyperdrive rating: {hyperdriveRating}</li>
                <li className="list-group-item">Length: {length}</li>
                <li className="list-group-item">Crew: {crew}</li>
                <li className="list-group-item">Passengers: {passengers}</li>
                <li className="list-group-item">Cargo Capacity: {cargoCapacity}</li>
            </ul>
          </div>
        </div>
    );
  }
}
