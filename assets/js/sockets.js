import { handleDisconnected, handleNewUser } from "./notifications";
import { handleNewMessage } from "./chat";

let socket = null;

export const getSocket = () => socket;

export const initSockets = (aSocket) => {
    const { events } = window;
    socket = aSocket;
    aSocket.on(events.newUser, handleNewUser);
    aSocket.on(events.disconnected, handleDisconnected);
    socket.on(events.newMsg, handleNewMessage);
};


