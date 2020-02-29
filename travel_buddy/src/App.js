import React, {useState, useEffect} from 'react';
import './Animations.css';
import Card from './Components/Card'
import SearchBar from './Components/SearchBar';
import './App.css';
import axios from 'axios';


const App = () => {
  useEffect(() => {
    const getCards = async () => {
      axios.get('http://3.8.56.93:3000/profiles').then((response)=>{console.log(response)});
    }
    getCards();
  })

  return (
    <div className="App">
        <SearchBar/>
        <p className = "ph-text">There are 500 hosts found in Lebanon. Choose your favourite one !</p>
        <div style={{maxHeight: "100px"}}>
          <Card />
        </div>
    </div>
  );
}

export default App;
