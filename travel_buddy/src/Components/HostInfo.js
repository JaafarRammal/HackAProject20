import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import logo from '../giphy.gif';


const HostInfo= (props) => {
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      
      const res = await axios.get(`http://3.8.56.93:3000/profiles/${props.match.params.id}`);
      
      setLoading(false);
      setAvatar(res.data.avatar);
    }
    getUser();
  }, []);

  return (
    loading === true ? <div className = "container v-al"><img alt = "" src = {logo}></img></div> :
   (<div className = "container d-flex flex-v mt-5 my-3 cut-t">
     <div className = "flex-h">
        <div className = "fl-2">
          <div className = "m-2">Name:</div>
          <div className = "m-2">Danil</div>
          <div className = "m-2">Email:</div>
          <div className = "m-2">sp@gmail.csaf</div>
        </div>
        <div>{
          (avatar != null) ? <img alt = "" src={`data:image/jpeg;base64,${avatar}`} /> : null
        }
        </div>
     </div>
     <div>
        <p className = "m-2">
        Phone : 
        </p>
        <p className = "m-2">
          0823194521995412
        </p>
     </div>
     <div>
       <p className = "m-2">Country:</p>
       <p className = "m-2">Brazil</p>
     </div>
    <div>
      <p className = "m-2">Details:</p>
      <p className = "m-2" id="details-t">
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
      </p>
    </div>
        <div className = "btn-flex">
        <Link to = "/">
          <button className = "btn btn-md btn-primary" id ="low">
            Check other hosts
          </button>
          </Link>
          <Link to = "/challenge">
          <button className = "btn btn-md btn-primary" id ="low">
            Get to know your host!
          </button>
          </Link>
        </div>
   </div>)
  );
}

export default HostInfo;
