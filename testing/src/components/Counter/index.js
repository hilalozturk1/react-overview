import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count - 1)}>dicrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}

export default Counter;
