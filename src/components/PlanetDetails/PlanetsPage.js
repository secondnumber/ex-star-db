import React, { Component } from 'react';
import './Planet.css';
import PlanetDetails from './PlanetDetails';
import ItemList from '../ItemList/ItemList';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default class PlanetsPage extends Component {

    render() {
        return (
            <ErrorBoundary>
            <div className='item-block row'>
                <ItemList
                    onItemSelected={this.props.onItemSelected}
                    getData={this.props.getData}
                    personId={this.props.personId}
                    renderItem={this.props.renderItem}
                />
                <PlanetDetails planetId={this.props.planetId}/>
            </div>
            </ErrorBoundary>
        );
    }
}