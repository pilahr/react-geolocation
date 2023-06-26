import React from "react";
import "./Login.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const getUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/weather");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(!errorMessage);
      });
  };

  const hideError = () => {
    setErrorMessage(!errorMessage);
  };

  return (
    <div className="login">
      <div>
        <Header />
      </div>
      <div>
        <h2 className="login__text">Want to know what is going on outside? </h2>
        <h4 className="login__text">
          Log In & Check how the weather is like today..
        </h4>
      </div>
      <div className="login__form">
        <LoginForm
          email={email}
          password={password}
          emailInput={setEmail}
          passwordInput={setPassword}
          hideError={hideError}
          getUser={getUser}
        />
        <div>
          {errorMessage && (
            <div className="login__popUp-msg">
              <h1 className="login__popUp-msg--text">
                Please Enter a valid email and password!
              </h1>
              <button className="login__popUp-msg--button" onClick={hideError}>
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
