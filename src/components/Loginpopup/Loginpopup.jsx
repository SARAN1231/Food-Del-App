import React, { useState } from "react";
import "./loginpopup.css";

import { assets } from "../../assets/assets";
const Loginpopup = ({ setshowlogin }) => {
  const [currstate, setcurrstate] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => {
              setshowlogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currstate === "Sign Up" ? (
            <input type="text" placeholder="Name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>{currstate === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of conditions & privacy policy
          </p>
        </div>
        {currstate === "Login" ? (
          <p>
            Don&apos;t have an account ..?
            <span
              onClick={() => {
                setcurrstate("Sign Up");
              }}
            >
              &nbsp; click Here
            </span>
          </p>
        ) : (
          <p>
            Already have an account..?
            <span
              onClick={() => {
                setcurrstate("Login");
              }}
            >
              &nbsp; Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
