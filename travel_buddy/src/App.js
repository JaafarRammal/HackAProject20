import React, {useState, useEffect} from 'react';
import './Animations.css';
import Card from './Components/Card'
import SearchBar from './Components/SearchBar';
import './App.css';
import axios from 'axios';

let user = {
  name: String,
  phone: String,
  email: String,
  picture: String,
  description: String,
  country: String
}

const App = () => {
  
  useEffect(() => {
    const getCards = async () => {
      const res = await axios({
        method: 'get',
        url: 'http://3.8.56.93:3000/profiles',
        headers: {
          'Cache-Control' : 'no-cache',
        },
        withCredentials : true
      });
      console.log(res);
    }
    getCards();
  },[])

  return (
    <div className="App m-3">
        <SearchBar/>
        <p className = "ph-text">There are 500 hosts found in Lebanon. Choose your favourite one !</p>
        <div style={{maxHeight: "100px"}}>
          <Card />
        </div>
    </div>
  );
}

export default App;
