const socket = io("/");

socket.on("hello", () => console.log("someone said hello."));