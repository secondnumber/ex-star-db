import React, { Component } from 'react';
import './Starship.css';
import ErrorButton from '../ErrorButton/ErrorButton';
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

    const { id, name } = this.state.starship;


    return (
        <div className="d-flex person-block col-8">
          <img className="item-image m-3" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt={`${name}`}/>
          <div className="d-flex flex-column m-3">
            <h3>{name}</h3>
            <ul className="list-group">

            </ul>
          </div>
        </div>
    );
  }
}
