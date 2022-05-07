import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";
import Loding from "../components/Loding/Loding";
import useToken from "../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser] = useSignInWithGoogle(auth);
  const [token] = useToken(user || guser);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const emailref = useRef("");
  const location = useLocation();
  const navigate = useNavigate();

  //whis route you want to go after login
  const from = location?.state?.from?.pathname || "/";

  //google login

  if (token) {
    navigate(from, { replace: true });
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  if (loading) {
    return <Loding></Loding>;
  }

  const handleSignInEmail = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    await signInWithEmailAndPassword(email, password);

    // navigate(from, { replace: true });
  };
  const handlePassWordReset = async (event) => {
    const email = emailref.current.value;
    await sendPasswordResetEmail(email);
    toast("Please check email");
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
            ref={emailref}
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
        <p className="text-danger">{error?.message}</p>
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
      <div className="mx-auto w-50">
        <a className="alert-link" onClick={handlePassWordReset}>
          Reset password
        </a>
      </div>
    </div>
  );
};

export default Login;
