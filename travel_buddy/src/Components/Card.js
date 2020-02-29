import React from 'react';

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <div style={{display: "flex"}}>
          <div style={{paddingLeft: "10px"}}>
            <div style={{height: "20px"}}></div>
            <img style={{verticalAlign: "middle"}} src="../../assets/user1.png/" alt=""/>
          </div>
          <div className="text-left" style={{flexGrow: "1", paddingLeft: "40px"}}>
            <h4 className="text-right">Jaafar Rammal</h4>
            <p className-name="text-right" style={{flexGrow: "1"}}>Lebanon</p>
            <div classNameName="text-right">
              <button className="btn btn-info text-right" type="button">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Card;
