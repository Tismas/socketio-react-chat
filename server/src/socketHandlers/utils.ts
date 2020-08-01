export const getUsername = (socket: SocketIO.Socket) =>
  socket.request._query.name;
