import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/userinfo")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="image_style">
      {users.map((data) => (
        <div className="card">
          <img src={data.image} className="card-img-top" alt="" />
          <div className="card-body">
            <p className="card-text">
             {data.describtion}
            </p>
            <p>{data.name}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
