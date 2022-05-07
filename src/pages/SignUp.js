import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loding from "../components/Loding/Loding";
import useToken from "../hooks/useToken";

const SignUp = () => {
  const [valid, setValid] = useState("");
  const [myerror, setMyError] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [token] = useToken(user);

  const navigate = useNavigate();
  if (token) {
    navigate("/login");
  }
  if (loading) {
    return <Loding></Loding>;
  }

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const conPassWord = event.target.conPassWord.value;

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
    await createUserWithEmailAndPassword(email, password);
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
