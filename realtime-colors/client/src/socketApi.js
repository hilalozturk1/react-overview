import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("connecting server");
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });
  socket.on("connect", () => {
    console.log("connected server succesfully");
  });
};

export const send = (color) => {
  //send messages to backend
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log("color", color);
    cb(color);
  });
};
