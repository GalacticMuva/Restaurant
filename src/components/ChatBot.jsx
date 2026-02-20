import { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm your CodeX waiter. How can I help you with the menu today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  
  const WORKER_URL = "https://menu.afergus2010.workers.dev";

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages })
      });

      const data = await response.json();
      
     
      setMessages([...updatedMessages, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages([...updatedMessages, { role: 'assistant', content: "Sorry, I'm having trouble connecting to the kitchen." }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: "Hello! I'm your CodeX waiter. How can I help you today?" }]);
  };

  return (
    <div className="chatbot-widget">
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>AI Waiter</span>
            <button className="clear-btn" onClick={clearChat} title="Clear Chat">🗑️</button>
          </div>

          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`message-bubble ${msg.role === 'user' ? 'user' : 'model'}`}>
                <p>{msg.content}</p>
              </div>
            ))}
            {loading && <div className="typing">Waiter is thinking...</div>}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about our food..."
            />
            <button onClick={handleSend} disabled={loading}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;