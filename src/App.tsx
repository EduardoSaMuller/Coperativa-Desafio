import React from 'react';
import './App.css';
import Vehicle from './pages/Vehicles/Vehicle';
import Driver from './pages/Drivers/Driver';
import Header from './components/organisms/Header/Header';

function App() {
  return (
    <div className="App">

      <Header/>
      <Vehicle/>
      <Driver/>
    </div>
  );
}

export default App;
