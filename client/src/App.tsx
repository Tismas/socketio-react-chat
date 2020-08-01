import React from 'react';

import { SocketContextProvider } from './SocketContext';
import { Chat } from './Chat';

export const App: React.FC = () => {
  const usernameInput = React.useRef<HTMLInputElement>(null);
  const [username, setUsername] = React.useState('');

  const onSubmit = () => {
    if (usernameInput && usernameInput.current?.value) {
      setUsername(usernameInput.current.value);
    }
  };

  if (!username) {
    return (
      <div>
        <input placeholder="Username..." ref={usernameInput} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    );
  }

  return (
    <SocketContextProvider username={username}>
      <Chat />
    </SocketContextProvider>
  );
};
