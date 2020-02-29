import React from 'react';
import user from '../assets/user1.png';
import axios from 'axios'


function Card() {
  const getCards = async () => {
    axios.get('http://3.8.56.93:3000/profiles').then((response)=>{console.log(response)});
  }

  return (
    <div className="card" style={{maxWidth: "300px"}}>
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
              <button className="btn btn-info text-right" type="button" onClick={getCards}>Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Card;
