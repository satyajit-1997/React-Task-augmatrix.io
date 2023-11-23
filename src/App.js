import UserData from "./components/UserData";
import Table from 'react-bootstrap/Table';
import { useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const API ="https://dummy.restapiexample.com/api/v1/employees"

const App= ()=>{
const[users,setUsers]=useState([]);

const fetchusers = async(url)=> {
  try{
    const res = await fetch(url)
    const data = await res.json();
    if (data.length > 0){
      setUsers(data);
    }
    }catch(err){
    console.log(err);
  }
    }
    useEffect(()=>{
      fetchusers(API);
    },[])
    
    return (  
    <div>
      <Table>
        <thead>
          <tr>
            <th>employee name</th>
            <th>employee salary</th>
            <th>employee age</th>
            <th>profile Pic</th>
            
          </tr>
        </thead>
      <tbody>
        <UserData users = {users}/>
      </tbody>
      </Table>
      
      </div>)
  

  }


export default App;
