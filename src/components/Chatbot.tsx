import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with any questions about Silostec Systems. How can I assist you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.1-8b-instruct:free',
          messages: [
            {
              role: 'system',
              content: `You are a helpful assistant for Silostec Systems, an IT company based in Hlohlokwe, South Africa.
              
              Company Information:
              - Location: Opposite Garage, Hlohlokwe, Sekororo, Trichardtsdal, Limpopo, South Africa, 0890
              - Phone: 073 676 6985
              - Email: info@silostecsystems.co.za
              - WhatsApp: 073 676 6985
              - Working Hours: Monday-Friday 08:00-18:00, Saturday-Sunday 08:00-15:00
              
              Services:
              - Web Development
              - Point of Sale (POS) Systems
              - Invoicing & Billing Systems
              - IT Support & Maintenance
              - Custom Software Development
              - Networking & IT Infrastructure
              - IT Security
              - Remote & Cloud Computing
              
              Team:
              - Masilo Sekgoka: Founder & CEO, IT Support and IT Systems Developer (masilo@silostecsystems.co.za, +27 73 676 6985)
              - Tumelo Modupi: Web Developer (tumelo@silostecsystems.co.za, +27 76 736 2968)
              
              Keep responses helpful, professional, and focused on how Silostec Systems can help with IT solutions. If asked about services not offered, politely redirect to available services.`
            },
            {
              role: 'user',
              content: inputMessage
            }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      const data = await response.json();
      console.log('OpenRouter API Response:', data); // ✅ See actual format

      const content =
        data.choices?.[0]?.message?.content ||
        data.choices?.[0]?.content ||
        'I\'m sorry, I didn’t get a valid response.';

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: content,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I apologize, but I\'m having trouble connecting right now. Please feel free to contact us directly at 073 676 6985 or info@silostecsystems.co.za for immediate assistance.',
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center">
              <Bot className="h-6 w-6 mr-2" />
              <div>
                <h3 className="font-semibold">Silostec Assistant</h3>
                <p className="text-xs text-blue-100">Ask me anything about our services</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-slate-100 text-slate-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm">{message.text}</p>
                    {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-800 max-w-xs px-3 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
