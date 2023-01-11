import { useEffect, useContext } from "react";
import ChatContext from "../context/ChatContext";
import { init, subscribe } from "../socketApi";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

function Container() {
  const { setMessage } = useContext(ChatContext);
  useEffect(() => {
    init();
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
