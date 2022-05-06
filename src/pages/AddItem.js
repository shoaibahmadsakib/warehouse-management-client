import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    const url = `https://still-stream-74299.herokuapp.com/userinfo`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("add successfully");
      });
  };

  return (
    <div className="w-50 mx-auto myForm_style my-5">
      <h2>Please add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="email"
          value={user.email}
          {...register("email")}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("describtion")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="suplier name"
          value={user?.displayName}
          type="text"
          {...register("suplierName")}
        />
        <input
          className="mb-2"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("image")}
        />
        <input
          type="submit"
          value="Add Service"
          className="btn btn-outline-info"
        />
      </form>
    </div>
  );
};

export default AddItem;
