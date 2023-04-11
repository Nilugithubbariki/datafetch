import React from "react";
import firstName from "./App";
const ComC = () => {
  return (
    <>
      <firstName.Consumer>
        {(fname) => {
          return { fname };
        }}
      </firstName.Consumer>
    </>
  );
};
export default ComC;
