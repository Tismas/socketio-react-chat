import { initChat } from "./chat";
import { getUsername } from "./utils";

export const addSocketHandlers = (io: SocketIO.Server) => {
  initChat(io);

  io.on("connection", (socket) => {
    const username = getUsername(socket);
    console.log(`${username} joined the game.`);
  });

  io.on("disconnect", (socket) => {
    const username = getUsername(socket);
    console.log(`${username} has left.`);
  });
};
