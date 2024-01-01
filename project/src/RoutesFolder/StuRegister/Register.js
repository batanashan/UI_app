import React, { useState } from 'react'
import {stuConfiguration} from './configuration'
import Input from '../../Components/InputControls/Input'
const Register = () => {
    const [stuData,setStuData] = useState(stuConfiguration)

    const stuChange = (eve)=>{
const {id,value} = eve.target;
let _stuData = [...stuData]
const inputObj = _stuData.find((obj)=>{
    return obj.id===id;
})
inputObj.isShownErr = value ? false:true;
inputObj.value=value;
setStuData(_stuData)
    }
    const fnStuClick = ()=>{
        let isFormValid = true;
        const FormData = {};
        let _data = [...stuData];
        _data.forEach((obj)=>{
FormData[obj.name]=obj.value;
if(!obj.value){
    isFormValid=false;
    obj.isShownErr = true;
}
        })
        if(!isFormValid){
setStuData(_data)
        }
    }
  return <div>
    {
        stuData.map((obj,ind)=>{
return <Input key={`inpu_${ind}`} {...obj} fnChange={stuChange}/>
        })
    }
<div className='row'>
    <div className='offset-sm-4 col-sm-8'><button className='btn btn-primary' onClick={fnStuClick}>Register</button></div>
  </div>
  </div>
  
}

export default Register;