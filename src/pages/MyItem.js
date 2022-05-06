import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import axios from "axios";
const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      const url = `https://still-stream-74299.herokuapp.com/userinfo`;
      const { data } = await axios.get(url);

      const remaining = data.filter((service) => service.email === user.email);
      setMyItem(remaining);
    };
    getOrder();
  }, [user, users]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("are you sure to delete it?");
    if (confirmDelete) {
      const url = `https://still-stream-74299.herokuapp.com/userinfo/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = users.filter((service) => service._id !== id);
          setUsers(remaining);
        });
    }
  };

  return (
    <div className="container d-flex justify-content-between flex-column  py-5 w-50 my_own_style">
      {myItem.map((data) => (
        <div
          key={data._id}
          className="d-flex justify-content-between flex-row pb-3"
        >
          <p>
            <b>name:</b> {data.name}
          </p>

          <button
            style={{ border: "none" }}
            onClick={() => handleDelete(data._id)}
          >
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyItem;
