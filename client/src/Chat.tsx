import React from 'react';
import { SocketContext } from './SocketContext';

export const Chat: React.FC = () => {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<string>('');
  const { chat } = React.useContext(SocketContext);

  chat.on('display message', (msg: string) => {
    setMessages([...messages, msg]);
  });

  const sendMessage = () => {
    chat.emit('send message', inputValue);
    setInputValue('');
  };

  return (
    <ul>
      {messages.map((message, i) => (
        <li key={i}>{message}</li>
      ))}
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </ul>
  );
};
