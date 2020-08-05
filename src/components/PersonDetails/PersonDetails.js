import React, { Component } from 'react';
import './Person.css';
import SwapiService from '../../services/api';

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps)  {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
            this.swapiService
               .getPerson(personId)
               .then((person) => {
                   this.setState({
                       person
                   })
               })
    }

    render() {
        if (!this.state.person) {
            return (
                <div>
                    <p>Select a person from a list</p>
                </div>
            );
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;


    return (
      <div className="d-flex person-block col-8">
            <img className="item-image m-3" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={`${name}`}/>
            <div className="d-flex flex-column m-3">
                <h3>{name}</h3>
                <ul className="list-group item-info">
                  <li className="list-group-item">Gender: {gender ? `${gender}` : 'n/a'}</li>
                  <li className="list-group-item">Birth year: {birthYear ? `${birthYear}` : 'n/a'}</li>
                  <li className="list-group-item">Eye color: {eyeColor ? `${eyeColor}` : 'n/a'}</li>
                </ul>
            </div>
      </div>
    );
  }
}
