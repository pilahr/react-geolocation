import React from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div>
        <h2 className="login-form__heading">Log in</h2>
      </div>

      <input
        className="login-form__input"
        placeholder="Your Email Address"
        type="text"
      />
      <input className="login-form__input" placeholder="Your Password" />

      <div className="login-form__button">
        <button className="login-form__button--login">Log in</button>
      </div>
    </div>
  );
};

export default LoginForm;
