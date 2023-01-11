import { useState } from "react";
import { send } from "../socketApi";
import styles from "./styles.module.css";

function ChatForm() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(message);
          send(message);
          setMessage("");
        }}
      >
        <input
          type="text"
          className={styles.textInput}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default ChatForm;
