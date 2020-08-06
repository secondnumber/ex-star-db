import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {
  render() {
    const { id, label } = this.props;

    return (
        <li className="list-group-item list-group-item-action"
               onClick={() => {this.props.onItemSelected(id)}}>
          {label}
        </li>);
  }
}
