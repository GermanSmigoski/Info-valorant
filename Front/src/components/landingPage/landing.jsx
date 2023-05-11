import React, { useState } from "react";
import { LoginForm, Register } from "../index";
import "./landing.css";

export const Landing = () => {
  const [showLogin, setShowLogin] = useState(null);
  const [displayNone, setDisplayNone] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setDisplayNone(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setDisplayNone(true);
  };

  return (
    <div className="landing-container">
      <div className="landing-info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        explicabo totam officia commodi magni expedita deleniti atque, eos
        aspernatur inventore sunt facilis, perferendis est cumque accusantium
        similique adipisci doloremque? Minima! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Dicta quis eligendi, magnam et veritatis
        similique quidem facilis corrupti sit aspernatur optio quisquam dolor
        cumque cupiditate eum necessitatibus blanditiis, ducimus repellendus.asd
      </div>
      <div className="landing-butts">
        <>
          <button
            className={displayNone ? "selected" : ""}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={displayNone ? "selected" : ""}
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </>

        {showLogin === true && (
          <div className="login-form">
            <LoginForm />
            <button className="unico" onClick={handleRegisterClick}>
              Register
            </button>
          </div>
        )}
        {showLogin === false && (
          <div className="register-form">
            <Register />
            <button onClick={handleLoginClick}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};
