import io from "socket.io-client";

let socket;
export const init = () => {
  console.log("connecting");
  socket = io("http://localhost:3000/", {
    transports: ["websocket"],
  });
  socket.on("connect", () => {
    console.log("connected");
  });
};
export const send = (message) => {
    if(socket) socket.emit("new-message", message)
    console.log("new message", message);
}
