import React, {useState, useEffect} from 'react';
import './Animations.css';
import Card from './Components/Card'
import SearchBar from './SearchBar';
import './App.css';
import axios from 'axios';


const App = () => {
  useEffect(() => {
    const getCards = async () => {
      let res = await axios.get('http:localhost:3000/profiles');

      console.log(res.data);
    }
    getCards();
  })

  return (
    <div className="App">
        <SearchBar/>
        <p className = "ph-text">There are 500 hosts found in Lebanon. Choose your favourite one !</p>
        <Card />
    </div>
  );
}

export default App;
