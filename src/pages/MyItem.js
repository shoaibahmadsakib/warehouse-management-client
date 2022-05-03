import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import axios from 'axios'
const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);

  useEffect(() => {
    const getOrder = async()=>{
      const email = user.email;
      const url = `http://localhost:5000/myitem?email=${email}`;
      const {data} =await axios.get(url)
      setMyItem(data)
     
    }
    getOrder()
    
  }, [user]);



  const handleDelete = (id) => {
    console.log(id);
    const confirmDelete = window.confirm("are you sure to delete it?");
    if (confirmDelete) {
      const email = user.email;
      const url = `http://localhost:5000/myitem?email=${email}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = myItem.filter((service) => service._id !== id);
          setMyItem(remaining);
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
