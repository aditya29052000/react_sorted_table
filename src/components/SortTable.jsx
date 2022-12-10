import React from 'react'
import { useState } from 'react'
import db from '../db.json'
import './SortTable.css';


const SortTable = () => {
    const [data, setdata] = useState(db)
    const[order, setorder] = useState("ASC")
    const sorting =(col)=>{
        if(order === "ASC"){
            const sorted=[...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("DSC");
        }
        if(order === "DSC"){
            const sorted=[...data].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("ASC");
        }
    }
  return (
    <div className='container'>
        <table className='table table-bordered'>
            <thead>
                <th><div className="dropdown">
    <button className="dropbtn">First Name_
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#" onClick={()=>sorting("first_name")}>Sort by ASC</a>
      <a href="#" onClick={()=>sorting("first_name")}>Sort by DSC</a>
      
    </div>
  </div> </th>
                <th>Last Name</th>
                <th>age</th>
                <th>Full Name</th>
            </thead>
            <tbody>
                { data.map((d)=>(
                    <tr key={d.id}>
                        <td>{d.first_name}</td>
                        <td>{d.last_name}</td>
                        <td>{d.age}</td>
                        <td>{d.fullname}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default SortTable