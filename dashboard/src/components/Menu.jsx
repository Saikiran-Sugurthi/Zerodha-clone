import { Link } from "react-router-dom";
import React,{useState} from "react";

const Menu = () => {
  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfileDropDownOpen,setIsProfileDropDownOpen]=useState(false);

  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }

  const handleProfileClick=()=>{
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  }

  const menuClass="menu"
  const activeMenuClass="menu selected"



  return (
    <div className="menu-container">
      <img src="kitelogo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(0)} to="/" >
            <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
            
          </li>
          <li>
           <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(1)} to="/orders" >
            <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
           <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(2)} to="/holdings" >
            <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(4)} to="/positions" >
            <p className={selectedMenu===4?activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
           <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(5)} to="/apps" >
            <p className={selectedMenu===5?activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
