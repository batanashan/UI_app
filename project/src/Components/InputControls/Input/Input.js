import React from 'react'

const Input = (props) => {
    const {label,type,id,name,value,errorMsg ,isShownErr ,fnChange}=props;
  return  <div className='row mb-3'>
    <div className='col-sm-4 text-end'><b>{label}</b>:</div>
    <div className='col-sm-3'><input id={id} name={name} type={type} value={value} onChange={fnChange} className='form-control'/></div>
    <div className='col-sm-5'>{isShownErr&&<span className='text-danger text-start'><b>{errorMsg}</b></span>}</div>
  </div>
 
 
}

export default Input