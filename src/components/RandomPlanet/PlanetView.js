import React from 'react';
import './PlanetView.css';

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
      <div className="d-flex random-planet">
        <img className="item-image m-3" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`Planet ${name}`}/>
        <div className="d-flex flex-column m-3">
        <h2>{name}</h2>
        <ul className="list-group">
          <li className="list-group-item">Population: {population}</li>
          <li className="list-group-item">Rotation period: {rotationPeriod}</li>
          <li className="list-group-item">Diameter: {diameter}</li>
        </ul>
        </div>
      </div>
  );
};

export default PlanetView;
