import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ItemList from './components/ItemList/ItemList';
import PersonDetails from './components/PersonDetails/PersonDetails';

const App = () => (
  <div>
    <Header />
    <RandomPlanet />
    <ItemList />
    <PersonDetails />
  </div>
);

export default App;
