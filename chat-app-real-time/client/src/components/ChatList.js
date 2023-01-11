import { useContext } from "react";
import styles from "./styles.module.css";
import ChatContext from "../context/ChatContext.js";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { message, setMessage } = useContext(ChatContext);

  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {message.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
