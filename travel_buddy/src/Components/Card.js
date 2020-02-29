import React from 'react';
import {
  Link
} from "react-router-dom";

const Card = ({user}) => {

  return (
    <div className="card bord-b" >
      <div className="card-body">
        <div>
        <h4 className="text-right">{user.name}</h4>
        </div>
        <div style={{display: "flex"}}>
          <div style={{paddingLeft: "10px"}}>
            <img style={{verticalAlign: "middle", height:"100px"}} src={`data:image/jpeg;base64,${user.avatar}`} alt=""/>
          </div>
          <div className="text-rigth" style={{flexGrow: "1", paddingLeft: "40px"}}>
            <p className="text-right" style={{flexGrow: "1"}}>{user.country}</p>
            <div className="text-right">
              <Link to = {`/hosts/${user._id}`}>
              <button className="btn btn-primary text-right" type="button" >Button</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Card;
