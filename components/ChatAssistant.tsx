import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToAssistant } from '../services/aiService';
import { ChatMessage } from '../types';
import { IMAGES } from '../constants';

interface ChatAssistantProps {
  onNavigate?: (href: string) => void;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your GCU Conference Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Create simple history for context (last 4 messages)
      const history = messages.slice(-4).map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text
      }));

      const fullResponse = await sendMessageToAssistant(userMessage, history);
      
      // Check for navigation command
      let displayResponse = fullResponse;
      if (fullResponse.includes('ACTION:NAVIGATE:')) {
        const parts = fullResponse.split('ACTION:NAVIGATE:');
        displayResponse = parts[0].trim();
        const pageId = parts[1].trim();
        
        if (onNavigate) {
          setTimeout(() => onNavigate(pageId), 1000);
        }
      }

      setMessages(prev => [...prev, { role: 'model', text: displayResponse || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to service. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden shrink-0">
                <img src={IMAGES.chatbotIcon} alt="Bot Icon" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Conference Assistant</h3>
                <p className="text-[10px] opacity-70">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white text-gray-800 shadow-sm border border-gray-100'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 text-sm border-gray-200 rounded-lg focus:ring-accent focus:border-accent"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-accent text-white p-2 rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white size-16 sm:size-20 md:size-24 rounded-full shadow-[0_12px_40px_rgba(74,14,14,0.15)] flex items-center justify-center hover:scale-110 hover:shadow-accent/30 transition-all duration-300 group relative overflow-hidden border-2 border-white flex-shrink-0"
        >
          <img
            src={IMAGES.chatbotIcon}
            alt="Chat Assistant"
            className="w-full h-full object-cover scale-[1.4] transition-transform duration-300 group-hover:scale-[1.5]"
          />
          <div className="absolute top-1 right-1 size-3 md:size-4 bg-accent rounded-full border-2 border-white animate-pulse z-10"></div>
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
