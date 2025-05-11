import axios from 'axios'
import { useEffect,useState } from 'react'
import React from 'react'

const Select = () => {
    const[data,seData]=useState([]);
    useEffect(()=>{
axios.get('http://localhost:2000/select')
.then(res=>seData(res.data))
.catch((err)=>{
    console.log('failed')
})

    },[])
  return (
    <div>
      <table border={2}>
<thead>
    <tr>
        <th>ManagerId </th>
        <th>Password </th>
        <th>userName </th>
        <th colSpan={2}>operation</th>
    </tr>
</thead>
<tbody>
    {
        data.map((manager,index)=>
        <tr key={studentid}>
            <td>{manager.ManagerId}</td>
            <td>{manager.Password}</td>
            <td>{manager.userName}</td>
            </tr> )
    }
</tbody>
      </table>
    </div>
  )
}

export default Select
