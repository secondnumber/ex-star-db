import React, { Component } from 'react';
import './Starship.css';
import StarshipDetails from './StarshipDetails';
import ItemList from '../ItemList/ItemList';

export default class StarchipsPage extends Component {

    render() {
        return (
            <div className='item-block row'>
                <ItemList
                    onItemSelected={this.props.onItemSelected}
                    getData={this.props.getData}
                    starshipId={this.props.starshipId}
                    renderItem={this.props.renderItem}
                />
                <StarshipDetails starshipId={this.props.starshipId}/>
            </div>
        );
    }
}