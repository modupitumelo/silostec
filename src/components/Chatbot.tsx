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
              - Web Development: Custom websites and web applications built with modern technologies
              - Point of Sale (POS) Systems: User-friendly POS solutions with inventory tracking, sales analytics, and payment processing
              - Invoicing & Billing Systems: Automated billing solutions that simplify invoice creation, delivery, and payment tracking
              - IT Support & Maintenance: Reliable technical support and regular system maintenance
              - Custom Software Development: Tailored software solutions designed specifically for business needs
              - Networking & IT Infrastructure: Setup and maintenance of efficient, secure networks and IT infrastructure
              - IT Security: Comprehensive security solutions to protect business data and digital assets
              - Remote & Cloud Computing: Cloud-based solutions that provide flexibility and accessibility
              
              Team:
              - Masilo Sekgoka: Founder & CEO, IT Support and IT Systems Developer (masilo@silostecsystems.co.za, +27 73 676 6985)
              - Tumelo Modupi: Web Developer (tumelo@silostecsystems.co.za, +27 76 736 2968)
              
              Case Studies:
              - Christian Fire Church: Financial Management Systems - designed robust system to streamline financial records, reporting, and budget management
              - Branels Furniture: Point of Sale Systems - custom POS systems with barcode scanning, stock tracking, lay-by payments, and sales reporting
              - MMJ Group: Invoicing Systems - easy-to-use invoicing systems with customizable invoices, automated billing, and payment integration
              - Maruleng Gender-Based Violence Center: IT Support - providing technical support, secure network management, and staff training
              
              Why Choose Silostec Systems:
              - Local Understanding: Based in rural community, understand challenges like poor connectivity and limited infrastructure
              - On-the-Ground Support: Provide on-site technical support and regular maintenance visits
              - Affordable Solutions: Cost-effective IT setups that are easy to maintain and long-lasting
              - Fast Response Times: Quick response even in remote areas to minimize downtime
              - Building Local Skills: Offer training and guidance so teams can manage basic IT tasks
              - Trusted & Secure: Prioritize data security and confidentiality
              
              Keep responses helpful, professional, and focused on how Silostec Systems can help with IT solutions. If asked about services not offered, politely redirect to available services. Be conversational and friendly while maintaining professionalism.`
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
      
      const content = data.choices?.[0]?.message?.content || 
                     'I apologize, but I\'m having trouble processing your request right now. Please feel free to contact us directly at 073 676 6985 or info@silostecsystems.co.za for immediate assistance.';

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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
      >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-16 sm:bottom-24 sm:right-6 sm:left-auto sm:inset-x-auto sm:w-80 h-80 sm:h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col max-w-sm sm:max-w-none">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-t-lg flex-shrink-0">
            <div className="flex items-center">
              <Bot className="h-5 w-5 sm:h-6 sm:w-6 mr-2 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm sm:text-base truncate">Silostec AI Assistant</h3>
                <p className="text-xs text-blue-100 truncate">Powered by AI - Ask me anything!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-xs px-3 py-2 rounded-lg break-words ${
                    message.isBot
                      ? 'bg-slate-100 text-slate-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
                    {!message.isBot && <User className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-800 max-w-[85%] sm:max-w-xs px-3 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t flex-shrink-0">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about our services..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm min-w-0"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-2 rounded-lg transition-colors flex-shrink-0"
              >
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};