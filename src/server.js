import express from "express";
import { join } from "path";
import socketIo from "socket.io";
import logger from "morgan";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.get("/",(req, res) => res.render("home"));
app.use(express.static(join(__dirname, "static")));

const server = app.listen(PORT, ()=>{
    console.log(`✅Server Running : http://localhost:${PORT}`);
})
const io = socketIo(server);


io.on("connection", (socket) => {
    // setTimeout(() => 
    // (socket.broadcast.emit("hello")),
    //  5000);
    socket.on("newMessage", (message ) => {
        socket.broadcast.emit("messageNotice", message);
    });
});
