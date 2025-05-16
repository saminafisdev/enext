// ChatbotToggle.tsx
"use client";
import { useState } from 'react';
import ChatbotWindow from '@/components/Chatbot/ChatbotWindow';
import { BotIcon } from 'lucide-react';

export default function ChatbotToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && <ChatbotWindow onClose={() => setIsOpen(false)} />}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl animate-bounce"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="absolute -top-12 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs px-3 py-1 rounded-md transition-opacity">
  Chat with us
  <span className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
</span>

        <BotIcon size={24} />
      </button>
    </div>
  );
}