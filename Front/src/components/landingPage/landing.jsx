import { react, useState } from "react";
import { LoginForm, Register } from "../index";
import "./landing.css";

export const Landing = () => {
  const [showLogin, setShowLogin] = useState(null);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
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
        cumque cupiditate eum necessitatibus blanditiis, ducimus repellendus.
      </div>
      <div className="lading-butts">
        {showLogin === true && <LoginForm />}
        {showLogin === false && <Register />}
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
};
