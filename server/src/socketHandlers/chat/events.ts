import { ChatHistory } from "./history";
import { getUsername } from "../utils";

export enum ChatEvents {
  SEND = "send message",
  DISPLAY = "display message",
}

const createEntry = (socket, message) => {
  return `${getUsername(socket)}: ${message}`;
};

export const addEventHandlers = (
  chatIO: SocketIO.Namespace,
  socket: SocketIO.Socket,
  history: ChatHistory
) => {
  socket.on(ChatEvents.SEND, (message: string) => {
    const entry = createEntry(socket, message);
    chatIO.emit(ChatEvents.DISPLAY, entry);
    history.addEntry(entry);
  });
};
