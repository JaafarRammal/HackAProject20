import React, {useState, useEffect} from 'react';
import './Animations.css';
import Card from './Components/Card'
import SearchBar from './Components/SearchBar';
import './App.css';
import axios from 'axios';
import HostInfo from './Components/HostInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        <Router>
          <Switch>
          <Route exact path = "/">
              <div className="App m-3">
                <SearchBar/>
                <p className = "ph-text">There are 500 hosts found in Lebanon. Choose your favourite one !</p>
                <div style={{maxHeight: "100px"}}>
                  {users.map((user) => 
                    <Card key = {user._id} name = {user.name}/> 
                  )}
                </div>  
            </div>
          </Route>
          <Route path = "/hosts"> 
              <HostInfo/>
          </Route>
          </Switch>
        </Router>
      );
}

export default App;
