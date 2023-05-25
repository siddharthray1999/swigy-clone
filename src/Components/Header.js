import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

import { Link } from "react-router-dom";


const loggedInUser =()=>{
  return true;
}



const Header = () => {

  const [isLoggedIn , setLoggedIn] = useState(false)
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
          <Link to="/about"><li>about us</li></Link>   <li>contact us</li> <li>cart</li>
          </ul>
        </div>

        {
          isLoggedIn? <button onClick={()=>setLoggedIn(false)}>logout</button> :<button onClick={()=>setLoggedIn(true)}>login</button>
        }
      
        
      </div>
    );
  };
  export default Header;