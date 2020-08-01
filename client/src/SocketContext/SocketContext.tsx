import React from 'react';
import io from 'socket.io-client';

const serverUrl = 'http://localhost:9000';
const sockets = (username: string) => ({
  default: io(serverUrl, { query: { name: username } }),
  chat: io(`${serverUrl}/chat`, { query: { name: username } }),
});

export const SocketContext = React.createContext<{ [key: string]: SocketIOClient.Socket }>(
  {} as ReturnType<typeof sockets>,
);
const { Provider } = SocketContext;

export const SocketContextProvider: React.FC<{ username: string }> = ({ children, username }) => {
  return <Provider value={sockets(username)}>{children}</Provider>;
};
