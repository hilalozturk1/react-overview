import { useEffect, useContext } from "react";
import ChatContext from "../context/ChatContext";
import { init, subscribe, subscribeInitialMessages } from "../socketApi";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

function Container() {
  const { setMessage } = useContext(ChatContext);
  useEffect(() => {
    init();
    subscribeInitialMessages((messages) => {setMessage(messages)});
    subscribe((message) => {
      setMessage((prevState) => [...prevState, { message }]);
    });
  }, []);
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
