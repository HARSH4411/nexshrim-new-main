
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Nexshrim's AI assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isBot: false }]);
      setInputValue('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thank you for your message! Our team will get back to you soon. You can also reach us at contact@nexshrim.com",
          isBot: true
        }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed right-4 md:right-8 bottom-20 md:bottom-24 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-nexshrim-blue to-nexshrim-dark-blue rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
        >
          💬
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed right-4 md:right-8 bottom-36 md:bottom-40 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-nexshrim-blue to-nexshrim-dark-blue text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Nexshrim Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded p-1 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs p-3 rounded-lg text-sm ${
                  message.isBot 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-nexshrim-blue text-white'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-nexshrim-blue"
            />
            <Button 
              onClick={handleSend}
              size="sm"
              className="bg-nexshrim-blue hover:bg-nexshrim-dark-blue"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
