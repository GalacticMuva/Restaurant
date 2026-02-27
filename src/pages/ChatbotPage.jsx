import { useState } from 'react';

export const ChatbotPage = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    // identity prompt
    const systemIdentity = `
        You are a friendly waiter at Lola's Filipino Kitchen. 
        You only answer questions based on the following menu:

        BREAKFAST:
        - Longsilog: $14.00
        - Taho: $2.00

        LUNCH:
        - Kare-Kare: $28.00
        - Pinakbet: $15.00

        DINNER:
        - Sinigang: $20.99
        - Kaldereta: $20.99

        BEVERAGES:
        - Calamansi Juice: $2.50
        - Kapeng Barako: $1.50

        Rules:
        1. If a customer asks for a recommendation, suggest the Kare-Kare or Longsilog.
        2. If they ask about prices, use the prices listed above.
        3. If they ask for something NOT on this list, politely say we don't serve it yet.
        4. Keep responses brief and hospitable.

        Just answer text not MD or HTML
    `;

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        //user 
        const userMessage = { role: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        try {

            const apiKey = import.meta.env.GEMINI_API_KEY;


const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";            
const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 
                    'x-goog-api-key': apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    system_instruction: { parts: [{ text: systemIdentity }] },
                    contents: [{
                        parts: [{ text: ` ${input}` }]
                    }]
                })
            });

            const data = await response.json();

            // error/ successful 
            if (response.ok && data.candidates) {
                const botText = data.candidates[0].content.parts[0].text;
                setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
            } else {
                console.error("API Error Details:", data);
                throw new Error(data.error?.message || "Invalid response");
            }

        } catch (error) {
            console.error("Chat Connection Error:", error);
            setMessages((prev) => [...prev, {
                role: 'bot',
                text: "I'm sorry, I'm having trouble connecting to the kitchen. Please try again!"
            }]);
        } finally {
            setLoading(false);
            setInput('');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Lola's AI Waiter</h2>

            {/* Chat Display Area */}
            <div className="chat-window border rounded p-3 bg-light mb-3" style={{ height: '450px', overflowY: 'auto' }}>
                {messages.length === 0 && (
                    <p className="text-center text-muted mt-5">Welcome to Lola's! Ask me about our menu.</p>
                )}

                {messages.map((msg, index) => (
                    <div key={index} className={`mb-3 d-flex ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                        <div className={`p-3 rounded-3 shadow-sm ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-white text-dark'}`} style={{ maxWidth: '80%' }}>
                            <strong>{msg.role === 'user' ? 'You' : 'Waiter'}:</strong>
                            <p className="mb-0 mt-1">{msg.text}</p>
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="text-start mb-3">
                        <span className="badge bg-secondary p-2 animate-pulse">Waiter is checking the menu...</span>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="input-group mb-5 shadow-sm">
                <input
                    type="text"
                    className="form-control p-3"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask about our breakfast, lunch, or dinner..."
                />
                <button className="btn btn-primary px-4" onClick={handleSendMessage} disabled={loading}>
                    {loading ? '...' : 'Send'}
                </button>
            </div>
        </div>
    );
};