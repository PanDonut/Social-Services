import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import fetch from "node-fetch";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

app.use(express.static('public'))
io.on("connection", (socket) => {
  console.log("NEW CONNECTION")
});

setInterval(async () => {
  fetch('https://chemical-merciful-cover.glitch.me/').then(console.log("PING!"))
}, 240000)

httpServer.listen(5000);