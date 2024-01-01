import React, {  useState } from 'react'
import './Menu.css'
import {Link,Routes,Route,Navigate} from 'react-router-dom'
import User from '../../RoutesFolder/Users'
import Profile from '../../RoutesFolder/Pofile'
import { Home } from '../../RoutesFolder/Home'

 const Menu = () => {
  const [menuItem,setMenuItem]=useState("")


  const handleMenuItemClick=(eve,item)=>{
eve.stopPropagation();
setMenuItem(item)
  }
  return <div>
   <div className='bg-light text-white'>
    <ul className='ul'>
    <li><Link className={menuItem==='home'?'menu-active':''} onClick={(eve)=>{handleMenuItemClick(eve,"home")}} to="/home" >Home</Link></li>
        <li><Link className={menuItem==='user'?'menu-active':'' } onClick={(eve)=>{handleMenuItemClick(eve,"user")}} to="/user" >Users</Link></li>
        
        <li><Link className={menuItem==='profile'?'menu-active':'' } onClick={(eve)=>{handleMenuItemClick(eve,"profile")}} to="/profile" >Profile</Link></li>

      </ul>
      </div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*"       element={<Navigate to="/home"/>}/>
      </Routes>
 
  </div>
  
}
export default Menu;
