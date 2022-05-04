import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Inventory = () => {
  const [info, setUnfo] = useState({});
  const [product, setProduct] = useState({});
  const [isRelode, setIsRelode] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/userinfo/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUnfo(data));
  }, [isRelode]);
  const { id } = useParams();

  const removeOne = () => {
    let newQuantity = info.quantity - 1;
    const newProduct = { ...info, quantity: newQuantity };
    //copy all previous data if exist in product and setup new quantity
    setUnfo(newProduct);

    fetch(`http://localhost:5000/userinfo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const quantity = e.target.quantity.value;

    const url = `http://localhost:5000/userinfo/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // e.target.reset("")
        setIsRelode(!isRelode);
      });
  };
  return (
    <div className="d-flex justify-content-between container pt-5 gap-4">
      <div className="first_part">
        <h2>Model Name: {info.name}</h2>
        <p>Model Id : {info._id}</p>
        <p>
          Quantity: <b>{info.quantity}</b>
        </p>
        <p>price: {info.price}</p>
        <p>Supplier name: {info.suplierName}</p>
        <p>{info.describtion}</p>
        <div className="d-flex justify-content-around">
          <button className="btn btn-primary" onClick={() => removeOne()}>
            Delever
          </button>

          <form onSubmit={handleSubmit}>
            <input type="number" name="quantity" id="" />
            <button className="btn btn-danger" type="submit">submit</button>
          </form>
        </div>
      </div>
      <div className="second_part">
        <img src={info.image} alt="" />
      </div>
    </div>
  );
};

export default Inventory;
