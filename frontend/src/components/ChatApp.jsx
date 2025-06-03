import React, { useState } from 'react';

export default function ChatApp() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    const userMsg = { sender: 'user', text: message };
    setChatLog(prev => [...prev, userMsg]);
    setMessage('');

    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      const botMsg = { sender: 'bot', text: data.reply };
      setChatLog(prev => [...prev, botMsg]);
    } catch (err) {
      setChatLog(prev => [...prev, { sender: 'bot', text: 'Error: Unable to fetch response.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>AI Chatbot</h1>
      <div style={{ height: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', marginBottom: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        {chatLog.map((entry, i) => (
          <div
            key={i}
            style={{
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: entry.sender === 'user' ? '#e6f7ff' : '#eeeeee',
              textAlign: entry.sender === 'user' ? 'right' : 'left'
            }}
          >
            {entry.text}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Ask something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
