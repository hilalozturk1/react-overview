import React from "react";

function Header({ number, increment }) {
  console.log("worked");
  return (
    <>
      <div>Header2 - {number}</div><hr/>
      <button onClick={increment}>click</button>

    </>
  );
}

export default React.memo(Header);
