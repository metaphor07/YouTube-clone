import axios from "axios";
import React from "react";
import { PROXY } from "../proxy";

const Test = () => {
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`auth/test2`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Test;
