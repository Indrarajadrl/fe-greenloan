import React ,{useState,useEffect} from 'react'
import axios from "axios";

const Userlist = () => {
const [users,setUser] = useState([]);

useEffect(()=>{
    getUsers();
},[]);

const getUsers = async () =>{
    const response = await axios.get('https://spring-boot-app1.onrender.com/user/list');
    console.log(response.data);
}

  return (
   <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
   </div>
  );
}

export default Userlist
