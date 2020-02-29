import React, {useState, useEffect} from 'react';
import './Animations.css';
import Card from './Components/Card'
import SearchBar from './Components/SearchBar';
import './App.css';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const res = await axios({
        method: 'get',
        url: 'http://3.8.56.93:3000/profiles',
      });
      setUsers(res.data);
    }
    getCards();
  },[])

  return (
    <div className="App m-3">
        <SearchBar/>
        <p className = "h6" style={{paddingTop: "20px", paddingBottom: "20px"}}>There are {users.length} hosts found in Lebanon. Choose your favourite one !</p>
          {users.map((user) => 
          <div style={{maxHeight: "200px", textAlign: "center", paddingBottom: "20px"}}>
            <Card key = {user._id} user = {user}/> 
          </div>
          )}
    </div>
  );
}

export default App;
