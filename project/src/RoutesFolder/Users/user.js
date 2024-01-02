import React, { useEffect, useState } from 'react'
import Table from '../../Components/Table';
import {Ajax} from '../../Services/ajax'
const User = () => {
     const [data,setData] = useState([{"sno":1}]);
     const fnGetData = async()=>{
      try{
        const res = await  Ajax.fnSendGetRequest("http://localhost:5000/getStudents");
        setData(res.data)
      }
      catch(e){
      console.log("getUsers something error",e)
      }
      
     }
     useEffect(()=>{
      fnGetData()
     },[])
  return <div>
<Table headers={["SNAME","AGE","GRADE"]}  data = {data} columns={["sname","age","grade"]}/>
  </div>
  
}

export default User;