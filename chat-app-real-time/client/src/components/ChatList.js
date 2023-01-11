import { useContext } from "react";
import styles from "./styles.module.css";
import ChatContext from "../context/ChatContext.js";
import ChatItem from "./ChatItem";

function ChatList() {
  const { message, setMessage } = useContext(ChatContext);

  return (
    <div className={styles.chatlist}>
      <div>
        {message.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
