import React, { Component } from 'react';
import './ItemList.css';
import SwapiService from '../../services/api';
import Spinner from '../Spinner/Spinner';
import Item from './Item/Item';

export default class ItemList extends Component {
  state = {
      itemsList: null
  };

  componentDidMount() {
      const { getData } = this.props;

      this.props.getData()
          .then((itemsList) => {
              this.setState({
                  itemsList
              });
          })
      };

  renderItems(arr) {
      return arr.map((item) => {
          const idRegExp = /\/([0-9]*)\/$/;
          const id  = item.url.match(idRegExp)[1];
          const label = this.props.renderItem(item);
          return (
              <Item key={id} className="list-group-item" id={id} label={label} onItemSelected={this.props.onItemSelected}/>
          )
      })
  }

    render() {
        const  { itemsList } = this.state;

        if (!itemsList) {
            return <Spinner />
        }

        if (itemsList) {
            const items = this.renderItems(itemsList);
            return (
                <ul className="list-group col-4 list-block">
                    {items}
                </ul>
            );
        }

  }
}


/* <Item key={idKey} id={idKey} label={label} onItemSelected={this.props.onItemSelected}/> */