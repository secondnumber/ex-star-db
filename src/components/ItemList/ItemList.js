import React, { Component } from 'react';
import './ItemList.css';
import SwapiService from '../../services/api';
import Item from './Item/Item';
import withData from '../hocs/withData';

const ItemList = (props) => {
        const { data, onItemSelected, children: renderLabel } = props;

            const items = data.map((item) => {
                const idRegExp = /\/([0-9]*)\/$/;
                const id  = item.url.match(idRegExp)[1];
                const label = renderLabel(item);
                return (
                    <Item key={id} className="list-group-item" id={id} label={label} onItemSelected={() => {onItemSelected(id)}}/>
                )
            });

            return (
                <ul className="list-group col-4 list-block">
                    {items}
                </ul>
            );
        };

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);