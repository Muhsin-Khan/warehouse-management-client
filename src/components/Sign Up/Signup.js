import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Signup.css";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }

  const handleSignup = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="signup-form body">
      <h3 style={{ textAlign: "center" }}>Sign Up</h3>
      <form onSubmit={handleSignup}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Email Address" />
        <input type="password" name="password" id="" placeholder="Password" />
        <input
          className="w-50 mx-auto btn btn-primary"
          type="submit"
          value="Sign Up"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-danger text-decoration-none pe-auto"
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
