
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../redux/chatSlice';

const MessageInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (!input.trim()) return;

    // User message
    dispatch(addMessage({ sender: 'user', text: input }));

    // Mock bot reply
    setTimeout(() => {
      dispatch(addMessage({ sender: 'bot', text: `You said: ${input}` }));
    }, 500);

    setInput('');
  };

  return (
    <div className="p-3 flex border-t">
      <input
        className="flex-1 border rounded-lg px-3 py-2 mr-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
