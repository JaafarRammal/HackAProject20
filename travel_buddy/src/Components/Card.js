import React from 'react';
import user from '../assets/user1.png';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Card() {

  return (
    <Router>
    <div className="card" style={{maxWidth: "300px"}}>
      <div className="card-body">
        <div>
        <h4 className="text-right">{user.name}</h4>
        </div>
        <div style={{display: "flex"}}>
          <div style={{paddingLeft: "10px"}}>
            <img style={{verticalAlign: "middle", height:"50px"}} src={pic} alt=""/>
          </div>
          <div className="text-rigth" style={{flexGrow: "1", paddingLeft: "40px"}}>
            <p className="text-right" style={{flexGrow: "1"}}>{user.country}</p>
            <div className="text-right">
                <Link to ={`/hosts?id=${user._id}`}><button className="btn btn-info text-right" type="button">
                Button</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </Router>
  );
}

export default Card;
