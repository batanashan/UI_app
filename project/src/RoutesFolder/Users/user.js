import React from 'react'
import Table from '../../Components/Table';

const User = () => {
  return <div>
<Table headers={["SNO","NAME","AGE","GRADE"]}  data = {[{"sno":1}]} columns={["sno","name","age","grade"]}/>
  </div>
  
}

export default User;