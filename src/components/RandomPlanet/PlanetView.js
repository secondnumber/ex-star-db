import React from 'react';
import './PlanetView.css';

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <div>
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="Random planet"
        />
      </div>
      <div>
        <h3>
          Planet name {name}
        </h3>
        <ul>
          <li>
            Population {population}
          </li>
          <li>
            Rotation period {rotationPeriod}
          </li>
          <li>
            Diameter {diameter}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlanetView;
