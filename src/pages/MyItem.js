import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import axios from 'axios'
const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getOrder = async()=>{
      
      const email =user.email
      console.log(email);
      const url = `http://localhost:5000/userinfo`;
      const {data} =await axios.get(url)
     
      const remaining = data.filter((service) => service.email === user.email);
      setMyItem(remaining)
    }
    getOrder()
    
  }, [user,users]);

// const myFilter = data.filter((service) => service.email === user.email);
// setMyItem(remaining)

const handleDelete = (id) => {
  console.log(id);
  const confirmDelete = window.confirm("are you sure to delete it?");
  if (confirmDelete) {
    const url = `http://localhost:5000/userinfo/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = users.filter((service) => service._id !== id);
        setUsers(remaining);
      });
  }
};


  return(
    <div>
      {
        myItem.map(data=>
        <div>
          <p>name: {data.name}</p>
          <button onClick={() => handleDelete(data._id)}>delete</button>
          
        </div>)
      }
    </div>
  )
};

export default MyItem;
