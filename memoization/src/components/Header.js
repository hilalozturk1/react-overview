import React from 'react'

function Header({number}) {
    console.log("worked");
  return (
    <div>Header2 - {number}</div>
  )
}

export default React.memo(Header)