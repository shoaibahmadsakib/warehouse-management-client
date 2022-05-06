import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import useGetinfo from "../hooks/useGetinfo";

const ManageItem = () => {
  const [users, setUsers] = useGetinfo();

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
    <div className="w-75 mx-auto">
      <h3 className="py-4">Manage All item</h3>
      <div className="all_item-align">
        {users.map((data) => (
          <div key={data._id} className="manageitem_align">
            <p>
              <b>Name :</b> {data.name}
            </p>
            <p>
              <b>Suplier :</b>
              {data.suplierName}
            </p>

            <div className="d-flex justify-content-between gap-3">
              <button
                style={{ border: "none" }}
                onClick={() => handleDelete(data._id)}
              >
                <i className="fa-solid fa-delete-left"></i>
              </button>

              <NavLink
                as={Link}
                className="text-primary p-0"
                to={`/updateitem/${data._id}`}
              >
                Update
              </NavLink>
              <Link to={`/inventory/${data._id}`} className="btn btn-primary">
                manage
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-end py-3">
        <Link to="/additem" className="btn btn-outline-info">
          Add Vehicles
        </Link>
      </div>
    </div>
  );
};

export default ManageItem;
