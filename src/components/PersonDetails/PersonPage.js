import React, { Component } from 'react';
import './Person.css';
import PersonDetails from './PersonDetails';
import ItemList from '../ItemList/ItemList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class PersonPage extends Component {
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
                <PersonDetails personId={this.props.personId}/>
            </div>
            </ErrorBoundary>
        );
    }
}

