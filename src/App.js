import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import Meme from './Meme'
import 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

export default App;
