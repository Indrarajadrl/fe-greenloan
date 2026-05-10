import React ,{useState,useEffect} from 'react'
import axios from "axios";

const Userlist = () => {
const [users,setUser] = useState([]);

useEffect(()=>{
    getUsers();
},[]);

const getUsers = async () =>{
    const response = await axios.get('https://spring-boot-app2.onrender.com/user/list');
    console.log(response.data);
    setUser(response.data);
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
                    <th>Requirement</th>
                    <th>Description</th>
                    <th>Type Business</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.requirement}</td> 
                    <td>{user.desc}</td>
                    <td>{user.type}</td>
                    <td>{user.status}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    </div>
   </div>
  );
}

export default Userlist
