import React from "react";

function Header({ number, data }) {
  console.log("worked");
  return (
    <>
      <div>Header2 - {number}</div><hr/>
      <code>
        {JSON.stringify(data)}
      </code>
    </>
  );
}

export default React.memo(Header);
