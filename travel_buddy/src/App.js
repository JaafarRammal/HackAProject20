import React, {useState, useEffect} from 'react';
import './Animations.css';
import Card from './Components/Card'
import SearchBar from './Components/SearchBar';
import './App.css';
import axios from 'axios';
import HostInfo from './Components/HostInfo';
import logo from './giphy.gif';
import Challenge from './Components/Challenge';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const [country, setCountry] = useState(null);

  const setCountryName = (name) => {
    setCountry(name);
  }

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);

      const res = await axios({
        method: 'get',
        url: 'http://3.8.56.93:3000/profiles',
      });

      setLoading(false);
      setUsers(res.data);
    }
    getCards();
  },[])

      return (
        <Router>
          <Switch>
          <Route exact path = "/">
          {loading === true ? <div className = "container v-al"><img alt ="" src = {logo}></img></div> :
          <div className="App m-3">
              <SearchBar setCountryName = {setCountryName}/>
              {country != null ? <p className = "h6" style={{paddingTop: "20px", paddingBottom: "20px"}}>There are {users.filter(user => user.country === country).length} hosts found in {country}. Choose your favourite one !</p> : null}

              {country != null ? (users.filter(user => user.country === country).map((user) => 
                <div key = {user._id} style={{maxHeight: "200px", textAlign: "center", paddingBottom: "20px"}}>
                  <Card user = {user}/> 
                </div>
              )) : (users.map((user) => 
              <div key = {user._id} style={{maxHeight: "200px", textAlign: "center", paddingBottom: "20px"}}>
                <Card user = {user}/> 
              </div>
            ))}
              {(users != null && users.length > 0) ? <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons"></a> : null}

          </div>
          }
          </Route>
          <Route path = "/hosts/:id" component = {HostInfo}/> 

          <Route path = "/challenge" component = {Challenge}/>
          </Switch>
        </Router>
      );
}

export default App;
