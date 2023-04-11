import React, { memo } from "react";
const Child = ({ callbackdata }) => {
  console.log("Child Component...");
  return (
    <>
      <h1>Child Component</h1>
    </>
  );
};
export default memo(Child);
