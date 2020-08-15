import React, { Component } from 'react';
import './ItemDetails.css';
import SwapiService from '../../services/api';

export const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">{label}: {item[field]}</li>
    )
}

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
        const { item } = this.state;
        const { id, name, gender, mass, height, birthYear, eyeColor, skinColor, hairColor } = item;
        const { image } = this.state;

    return (
      <div className="d-flex content-block col-8">
            <img className="item-image m-3" src={image} alt={`${name}`}/>
            <div className="d-flex flex-column m-3">
                <h3 className="item-header">{name}</h3>
                <ul className="list-group item-info">
                    {
                        React.Children.map(this.props.children, (child) => {
                          return React.cloneElement(child, {item});
                        })
                    }
                </ul>
            </div>
      </div>
    );
  }
}
