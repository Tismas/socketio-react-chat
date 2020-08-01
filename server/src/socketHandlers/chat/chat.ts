import { ChatHistory } from "./history";
import { ChatEvents, addEventHandlers } from "./events";

const history = new ChatHistory();

export const initChat = (io: SocketIO.Server) => {
  const chatIO = io.of("chat");

  chatIO.on("connection", (socket: SocketIO.Socket) => {
    for (const message of history.getHistory()) {
      socket.emit(ChatEvents.DISPLAY, message);
    }

    addEventHandlers(chatIO, socket, history);
  });
};
