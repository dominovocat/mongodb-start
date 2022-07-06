import { io } from "socket.io-client";

export const socket = io("http://localhost:5000", { auth: { userId: "1239" }});

//socket.emit('hello',{data:'from client'});

socket.on("hello", (data, param) => {
  console.log("Server said hello", data);
  socket.emit("hello", "from client");
});

socket.on("newMesage", (newMsg) => {
  const sub = subscribers.find(sub => sub.eventName === "newMessage");
  if (sub) {
    sub.callback(newMsg);
  }
});

const subscribers = [];

export const addSubscriber = (eventName, callback) => {
  subscribers.push({ eventName, callback });
};
