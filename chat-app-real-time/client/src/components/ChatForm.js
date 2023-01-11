import { useState, useContext } from "react";
import ChatContext from "../context/ChatContext";
import { send } from "../socketApi";
import styles from "./styles.module.css";

function ChatForm() {
  const [newMessage, setNewMessage] = useState("");
  const { message, setMessage } = useContext(ChatContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(newMessage);
          setMessage([...message, { message : newMessage }]);
          send(newMessage);

          setNewMessage("");
        }}
      >
        <input
          type="text"
          className={styles.textInput}
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default ChatForm;
