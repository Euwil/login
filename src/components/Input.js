import React from "react";
// component
// DRY
// KISS
const Input = ({ name, state, children, ...props }) => (
  <>
    <input
      name={name}
      className={name + "-input"}
      value={state[name]}
      {...props}
      required
    />
    <h1>{children}</h1>
  </>
);
export default Input;
