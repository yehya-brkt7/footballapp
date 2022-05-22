import React, { useEffect } from "react";
import shirt from "./shirt.png";
import useStore from "../store/store";
import "./shirt.css";

const Shirt = (props) => {
  return (
    <>
      <img src={shirt} height="90" className="shirt"></img>
      <div></div>
    </>
  );
};

export default Shirt;
