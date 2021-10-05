import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input";
import LinksCont from "./links";
import openEye from "./showPassword.svg";
import closedEye from "./hidePassword.svg";
import FormDescription from "./formDesc";
//boolean
//render
const LoginForm = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const [eye, setEye] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value, style } = target;
    setState({ ...state, [name]: value });
    style.borderColor = value.length < 1 ? "red" : "green";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Your password is ${state.password}. Your e-mail is ${state.email}`
    );
  };
  const showPassword = () => setEye(!eye);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <FormDescription />
      <div>
        <Input
          name="email"
          state={state}
          onChange={handleChange}
          placeholder="Your e-mail"
        />
        <span className="input-wrapper">
          <Input
            name="password"
            state={state}
            onChange={handleChange}
            type={eye ? "password" : "text"}
            placeholder="Your password"
          />
          <img
            className="password-icon"
            width="18"
            height="18"
            onClick={showPassword}
            src={eye ? openEye : closedEye}
            alt="password-eye"
          />
        </span>
      </div>
      <input type="submit" value="Отправить" className="submit-login-btn" />
      <LinksCont />
    </form>
  );
};

export default LoginForm;
