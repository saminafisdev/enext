// ChatbotWindow.tsx
"use client";
import { useState, useRef } from 'react';
import { Send, X, Mic, Paperclip } from 'lucide-react';
import MessageBubble from './MessageBubble';
import VoiceRecorder from './VoiceRecorder';

export default function ChatbotWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulated bot reply for now
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'This is a simulated response.' }]);
    }, 500);

    // Later: Replace this with backend API call
    // const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: input }) });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setMessages((prev) => [...prev, { sender: 'user', text: `📎 Uploaded: ${file.name}` }]);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl p-4 z-50 flex flex-col">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h3 className="font-bold text-blue-700">Ask Me Anything</h3>
        <X className="cursor-pointer" onClick={onClose} />
      </div>

      <div className="flex-1 overflow-y-auto max-h-96 space-y-2 mb-3 pr-2">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border rounded-lg px-3 py-2 text-sm shadow-sm"
          placeholder="Type a message..."
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <Paperclip />
          <input id="file-upload" type="file" className="hidden" onChange={handleFileUpload} />
        </label>
        <VoiceRecorder onRecordingComplete={(text) => setMessages((prev) => [...prev, { sender: 'user', text }])} />
        <Send className="cursor-pointer text-blue-600" onClick={sendMessage} />
      </div>
    </div>
  );
}