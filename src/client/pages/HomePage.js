import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the very home comp</div>
      <button onClick={() => console.log("hi there!")}>press me!</button>
    </div>
  );
};

export default {component: Home};
