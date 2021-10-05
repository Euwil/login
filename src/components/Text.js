import React from "react";

const Text = () => {
  let text = "hi";
  setTimeout(() => (text = "world"), 500);
  const ffu = () => {
    10 + 15;
  };
  ffu();
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
