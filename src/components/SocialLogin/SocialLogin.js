import React from "react";
import "./SocialLogin.css";
import google from "../../Social icon/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/home");
  }
  
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="seperator-line w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="seperator-line w-50"></div>
      </div>
      
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
