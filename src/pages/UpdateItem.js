import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const UpdateItem = () => {
  const [updateItem, setUpdateItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://still-stream-74299.herokuapp.com/userinfo/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateItem(data));
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const describtion = e.target.describtion.value;
    const price = e.target.email.value;
    const quantity = e.target.quantity.value;
    const image = e.target.image.value;
    const updateItem = {
      name,
      price,
      quantity,
      image,
      describtion,
    };
    console.log(updateItem);

    const url = `https://still-stream-74299.herokuapp.com/userinfo/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("update successfully");
      });
  };
  // setUpdateItem(id);
  return (
    <div className="w-50 mx-auto">
      <h2>Please update a service:{updateItem.name}</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          name="name"
          
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          name="describtion"
        
          {...register("describtion")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          name="price"
         
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="quantity"
          type="number"
          name="quantity"
         
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          name="image"
          
          {...register("image")}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default UpdateItem;
