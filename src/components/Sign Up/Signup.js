import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import "./Signup.css";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Signup = () => {
  
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
    return <Loading></Loading>
}

  if (user) {
    navigate("/home");
  }

  // const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   setName(Event.target.value)
  //   setEmail(Event.target.value)
  //   setPassword(Event.target.value)

  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(name, email, password);
    console.log(name, email, password)
    .then(result =>{
      const user = result.user;
      console.log('getting...', user)
      
    })
    
    .catch(error=>{
      console.error(error)
    })
    
  };
  return (
    <div className="signup-form body">
      <h3 className="mt-4 mb-3" style={{ textAlign: "center" }}>Sign Up</h3>
      <form onSubmit={handleSignup}>
        <input type="text" name="name"  placeholder="Your Name" />
        <input type="email" name="email"  placeholder="Email Address" />
        <input type="password" name="password" placeholder="Password" />
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
