import { useState } from "react";
const defaultItems = [
  {
    name: "item a",
  },
  { name: "item b" },
];

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);
  return (
    <div style={{ marginTop: "55px" }}>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>

      <button
        onClick={() => {
          setItems((prev) => [...prev, { name: text }]);
          setText("");
        }}
      >
        Add
      </button>
      <br />
      <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;
