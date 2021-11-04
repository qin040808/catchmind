import { handleMessageNotice } from "./chat";
const socket = io("/");

socket.on("hello", () => console.log("Somebody said Hello"));

socket.on("messageNotice", handleMessageNotice);

function sendMessage(message) {
  socket.emit("newMessage", { message });
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}