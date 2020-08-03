import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Star DB</h1>
        <nav>
          <ul>
            <li>People</li>
            <li>Planets</li>
            <li>Starships</li>
          </ul>
        </nav>
      </div>
    );
  }
}
