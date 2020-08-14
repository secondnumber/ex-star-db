import React, { Component } from 'react';
import './ItemDetails.css';
import SwapiService from '../../services/api';

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps)  {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImage } = this.props;

        if (!itemId) {
            return;
        }
               getData(itemId)
               .then((item) => {
                   const url = getImage(item);
                   this.setState({
                       item,
                       image: url,
                   })
               })
    }

    render() {

        if (!this.state.item) {
            return (
                <div>
                    <p>Select item from a list</p>
                </div>
            );
        }

        const { id, name, gender, mass, height, birthYear, eyeColor, skinColor, hairColor } = this.state.item;
        const { image } = this.state;

    return (
      <div className="d-flex content-block col-8">
            <img className="item-image m-3" src={image} alt={`${name}`}/>
            <div className="d-flex flex-column m-3">
                <h3 className="item-header">{name}</h3>
                <ul className="list-group item-info">
                  <li className="list-group-item">Gender: {gender ? `${gender}` : 'n/a'}</li>
                  <li className="list-group-item">Birth year: {birthYear ? `${birthYear}` : 'n/a'}</li>
                  <li className="list-group-item">Mass: {mass ? `${mass}` : 'n/a'}</li>
                  <li className="list-group-item">Height: {height ? `${height}` : 'n/a'}</li>
                  <li className="list-group-item">Eye color: {eyeColor ? `${eyeColor}` : 'n/a'}</li>
                  <li className="list-group-item">Skin color: {skinColor ? `${skinColor}` : 'n/a'}</li>
                  <li className="list-group-item">Hair color: {hairColor ? `${hairColor}` : 'n/a'}</li>
                </ul>
            </div>
      </div>
    );
  }
}
