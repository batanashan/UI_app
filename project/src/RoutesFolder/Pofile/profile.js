import React from 'react'
import { proConfiguration } from './configuration'
import Input from '../../Components/InputControls/Input'

const Profile = () => {

  return   <div>
{proConfiguration.map((obj,ind)=>{
return <Input key={`inpu_${ind}`} {...obj}/>
})}
 <div className='row'>
    <div className='offset-sm-4 col-sm-8'><button className='btn btn-primary mx-3' >Update</button>
    <button className='btn btn-primary' >Delete</button></div>
  </div>
  </div>
  
}

export default Profile