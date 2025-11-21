import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hi! I'm the TruckTrackr assistant. Hungry? Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await sendMessageToGemini(userMsg);

    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-20 right-4 z-[60] md:bottom-8">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-brand-blue text-white p-4 flex justify-between items-center">
            <h3 className="font-bold flex items-center gap-2">
              <MessageSquare size={18} /> TruckTrackr AI
            </h3>
            <button onClick={toggleChat} className="hover:bg-blue-800 p-1 rounded">
              <X size={18} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user'
                    ? 'bg-brand-blue text-white ml-auto rounded-br-none'
                    : 'bg-white text-gray-800 border border-gray-200 mr-auto rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-500 text-xs ml-2">
                <Loader2 size={14} className="animate-spin" /> Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Find a burger..."
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-blue"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-brand-yellow text-brand-blue p-2 rounded-full hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${isOpen ? 'hidden' : 'flex'} items-center justify-center w-14 h-14 rounded-full bg-brand-blue text-white shadow-lg hover:bg-blue-800 transition-all hover:scale-105`}
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};