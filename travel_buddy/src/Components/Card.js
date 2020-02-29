import React from 'react';
import user from '../assets/user1.png';


function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <div>
            <h4 className="text-right">Jaafar Rammal</h4>
        </div>
        <div style={{display: "flex"}}>
          <div style={{paddingLeft: "10px"}}>
            <img style={{verticalAlign: "middle", height:"50px"}} src={user} alt=""/>
          </div>
          <div className="text-rigth" style={{flexGrow: "1", paddingLeft: "40px"}}>
            <p className="text-right" style={{flexGrow: "1"}}>Lebanon</p>
            <div className="text-right">
              <button className="btn btn-info text-right" type="button">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Card;
