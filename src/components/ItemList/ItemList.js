import React, { Component } from 'react';
import './ItemList.css';
import SwapiService from "../../services/api";
import Spinner from "../Spinner/Spinner";
import Item from "./Item/Item";

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
      return arr.map(({ id, name}) => {
          return (
              <Item key={id} id={id} name={name} onItemSelected={this.props.onItemSelected} />
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
