import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const SignUp = () => {
  const [valid, setValid] = useState("");
  const [myerror, setMyError] = useState("");
  // const [password,setPassword] = useState('')
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const conPassWord = event.target.conPassWord.value;
    // const photoUrl = event.target.photo.value;
    // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //   console.log("this is not validet");
    //   return;
    // }
    if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)
    ) {
      setValid(
        "use for min 8 letter password, with at least a symbol, upper and lower case letters and a number"
      );
      return;
    }

    if (password !== conPassWord) {
      setMyError("not match");
      return;
    }

    const result = {
      email,
      password,
    };
    console.log(result);
    createUserWithEmailAndPassword(email, password).then(() => {
      Navigate('/');
    });
  };
  return (
    <div>
      <h2 className="text-center">Sign Up</h2>
      <Form onSubmit={handleEmailSubmit} className="mx-auto w-50 ">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            required
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="input Password"
            required
            autoComplete="off"
          />
        </Form.Group>
        <p className="text-danger">{myerror}</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            name="conPassWord"
            type="password"
            placeholder="confirm Password"
            required
            autoComplete="off"
          />
        </Form.Group>
        <p className="text-danger">{valid}</p>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            name="photo"
            type="text"
            placeholder="photourl"
          />
        </Form.Group> */}
        <Button type="submit" variant="primary">
          Submit here
        </Button>
        <p>
          If you already resistrarion,<Link to="/login"> Please sign in</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUp;
