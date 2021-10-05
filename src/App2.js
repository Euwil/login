import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input";

// Hook
// snippet
// component
// KISS = keep it simple stupid
// DRY = don't repeat yourself
// yarn

const LoginForm = () => {
  const [state, setState] = useState({ login: "", password: "", email: "" });

  const handleChange = ({ target }) => {
    const { name, value, style } = target;
    setState({ ...state, [name]: value });
    style.borderColor = value.length < 1 ? "red" : "green";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Your login is ${state.login}. Your password is ${state.password}. Your e-mail is ${state.email}`
    );
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input
        name="login"
        state={state}
        onChange={handleChange}
        placeholder="Your login"
      />
      <Input
        name="password"
        state={state}
        onChange={handleChange}
        placeholder="Your password"
      />
      <Input
        name="email"
        state={state}
        onChange={handleChange}
        placeholder="Your e-mail"
      />
      <input type="submit" value="Отправить" className="submit-login-btn" />
    </form>
  );
};

export default LoginForm;
