import socketio from "socket.io";
import express from "express";
import http from "http";

import { addSocketHandlers } from "./socketHandlers";

const port = 9000;
const app = express(port);
const server = http.createServer(app);
const io = socketio(server);
addSocketHandlers(io);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
