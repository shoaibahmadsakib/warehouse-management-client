import React, { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ManageItem = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/userinfo")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

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

  return (
    <div className="w-50 mx-auto">
      <h3>manage data item</h3>
      {users.map((data) => (
        <div className="manageitem_align">
          <p>{data.name}</p>
          <div className="d-flex justify-content-between gap-3">
            <button style={{border:'none'}} onClick={() => handleDelete(data._id)}><i className="fa-solid fa-delete-left"></i></button>
            
           <NavLink as={Link} className="text-primary" to={`/updateitem/${data._id}`}>Update</NavLink>
          </div>
        </div>
      ))}
      <Link to="/additem">Add Inventory</Link>
    </div>
  );
};

export default ManageItem;
