import React from "react";
import "./Login.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <div className="login">
      <div>
        <Header />
      </div>
      <div>
        <h2 className="login__text">Want to know what is going on outside?</h2>
        <h4 className="login__text">
          Let's check how the weather is like today..
        </h4>
      </div>
      <div className="login__form">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
