import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const navigate = useNavigate();

  //whis route you want to go after login
  const from = location?.state?.from?.pathname || "/";

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  //email sign in

  const handleSignInEmail = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const result = {
      email,
      password,
    };
    signInWithEmailAndPassword(email, password).then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h2 className="text-center">Login Here</h2>
      <Form onSubmit={handleSignInEmail} className="mx-auto w-50 ">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="input Password"
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit here
        </Button>
        <br />
        <Button className="mt-3" variant="danger" onClick={handleGoogleSignIn}>
          Google Sign In
        </Button>
        <p>
          If you not resistrarion,
          <Link to="/signup"> Please resistration here</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
