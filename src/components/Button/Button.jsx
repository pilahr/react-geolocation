import React from "react";
import "./Button.scss";

const Button = ({ label, onClick }) => {

  return (
    <div>
      <button className="btn" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
