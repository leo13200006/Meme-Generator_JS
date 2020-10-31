import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import Meme from './Meme'
import 'react-bootstrap'
import Select from './Select'

function App() {
  return (
    <div className="App">
      <Header/>
      <Select/>
    </div>
  );
}

export default App;
