const socket = io("/");

socket.on("messageNotice", (data) => console.log(data.name+" said: \n"+data.message));

let client = {
    name: "anonymous",
    message: ""
}
function setNick(nick) {
    client.name = nick;
}

function sendMessage(message) {
    client.message = message
    socket.emit("newMessage",client);
}