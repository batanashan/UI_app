import React, { useContext, useState } from 'react'
import {InputControl} from './configuration'
import Input from '../../Components/InputControls/Input'
import { appCtx } from '../../Context/context'
import './login.css'
import { Link, Route ,Routes} from 'react-router-dom'
import Register from '../../RoutesFolder/StuRegister'

const Login = () => {
  const ctxData = useContext(appCtx)
  
      const [UserData,setUserData]=useState(InputControl)
    const fnChange=(eve)=>{
       const {id,value}=eve.target;
       let _data= [...UserData];
       const InputContObj=_data.find((obj)=>{
        return obj.id===id;
       })
      InputContObj.isShownErr = value ? false:true;
      InputContObj.value=value;
      setUserData(_data)
    }
    const fnClick=()=>{
      let isFormValid = true;
      const InputData = {};
      let _data = [...UserData];
      _data.forEach((obj)=>{
InputData[obj.name]=obj.value;
if(!obj.value){
  obj.isShownErr=true;
  isFormValid=false
}
  })
  if(!isFormValid){
    setUserData(_data)
  }
  console.log(JSON.stringify(InputData))
  ctxData.dispatch({type:"LOGIN",payload:true})
// fnReset()
    }
  //   const fnReset = ()=>{
  //     let _data = [...UserData];
  //     _data.forEach((obj)=>{
  //       obj.isShownErr = ""
  //      obj.value = ""
  // })
  // setUserData(_data)
  //   }
  return <div className='mt-4' >
   
   {UserData.map((obj,ind)=>{
    return  <Input key={`input_${ind}`} {...obj} fnChange={fnChange}/>
   })}
   
     <div className='row'>
      <div className='offset-sm-4'>
  <button className='btn btn-primary' onClick={fnClick}>Login</button> 
  <span className='text-primary mx-4'><Link to="/register">Register</Link></span>
    
   </div>
   <Routes>
    <Route path="/register" element = {<Register/>}/>
   </Routes>
  </div>
    </div>

}

export default Login;






  


