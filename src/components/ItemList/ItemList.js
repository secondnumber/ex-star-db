import React, { Component } from 'react';
import './ItemList.css';
import Item from './Item/Item';

export default class ItemList extends Component {
  render() {
    return (
      <ul>
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    );
  }
}
