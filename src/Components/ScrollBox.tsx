import React from "react";

const ScrollBox = () => {
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
  };

  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, black)",
  };

  return (
    <div style={style}>
      <div style={innerStyle} />
    </div>
  );
};

export default ScrollBox;
