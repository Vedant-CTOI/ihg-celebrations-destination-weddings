import React, { useState, useRef, useEffect } from 'react';
import { CONCIERGE_CANVAS_PROMPTS } from '../constants';
import { ConciergeMessage } from '../types';
import { X, Send, Sparkles } from 'lucide-react';

interface AiConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiConciergeDrawer: React.FC<AiConciergeDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ConciergeMessage[]>([
    {
      id: 'msg-1',
      sender: 'riti',
      text: 'Namaste. I am Riti, IHG Wedding Concierge. Ask me about our sacred Havan spaces, dietary kitchen segregation, or sound curfews.',
      timestamp: 'Just now'
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: ConciergeMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: queryText.trim(),
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const q = queryText.toLowerCase();

      if (q.includes('jain') || q.includes('diet') || q.includes('food') || q.includes('veg')) {
        reply = 'All IHG India destination resorts provide physically segregated satellite kitchens. Dedicated zero onion/garlic pantries and independent dishwashing lines ensure complete sanctity.';
      } else if (q.includes('sound') || q.includes('curfew') || q.includes('sangeet') || q.includes('dj')) {
        reply = 'Outdoor music winds down at 10:00 PM per regulations, after which guests seamlessly transition to our acoustically insulated pillarless ballrooms (certified up to 98dB) until late.';
      } else if (q.includes('baraat') || q.includes('horse') || q.includes('route')) {
        reply = 'Each sanctuary features wide ceremonial processional driveways designed for vintage cars, decorated horses, and live Dhol percussion.';
      } else {
        reply = `Our on-ground Wedding Directors coordinate this directly. We can arrange a private sanctuary walkthrough with dates that suit your family.`;
      }

      const ritiMsg: ConciergeMessage = {
        id: 'riti-' + Date.now(),
        sender: 'riti',
        text: reply,
        timestamp: 'Just now'
      };

      setMessages((prev) => [...prev, ritiMsg]);
      setIsTyping(false);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-brand-navy/50 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-label="Ask Riti AI Concierge"
      >
        
        {/* Header */}
        <div className="p-4 border-b border-brand-border/60 flex items-center justify-between font-sans">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="font-serif text-base text-brand-navy font-normal">Ask Riti</span>
            <span className="text-[10px] uppercase text-brand-muted tracking-wider">AI Concierge</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-brand-navy/60 hover:text-brand-navy"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Prompts */}
        <div className="p-3 border-b border-brand-border/40 overflow-x-auto no-scrollbar flex space-x-1.5">
          {CONCIERGE_CANVAS_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendQuery(prompt.query)}
              className="shrink-0 bg-brand-cream/60 hover:bg-brand-cream border border-brand-border/60 text-brand-navy px-2.5 py-1 rounded-full text-[11px] font-sans transition-colors whitespace-nowrap"
            >
              {prompt.title}
            </button>
          ))}
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-brand-navy text-white'
                    : 'bg-brand-cream/80 text-brand-navy border border-brand-border/50 font-light'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="text-[11px] text-brand-muted font-sans italic">
              Riti is checking guidelines...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-brand-border/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuery(inputVal);
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Ask about venues, rituals, dining..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 border border-brand-border/80 rounded-xl px-3 py-2 text-xs font-sans focus:outline-none focus:border-brand-orange"
            />
            <button
              type="submit"
              className="bg-brand-navy hover:bg-brand-orange text-white p-2 rounded-xl transition-colors"
              aria-label="Send"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
