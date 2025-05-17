"use client";

import { useState, useRef } from "react";
import { Send, X } from "lucide-react";
import MessageBubble from "./MessageBubble";
import { sendChatMessage } from "@/lib/api";

export default function ChatbotWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const formatChatbotText = (text: string) => {
    return text
      .replace(/\\n/g, "\n")
      .replace(/\* /g, "")
      .split(/(?=\n• )|(?<=\*\s)/)
      .map((line) => line.trim())
      .filter(Boolean)
      .join("\n");
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const rawReply = await sendChatMessage(input);
      const formattedReply = formatChatbotText(rawReply);
      setMessages((prev) => [...prev, { sender: "bot", text: formattedReply }]);
    } catch (error: any) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `⚠️ Error: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
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
        {isLoading && (
          <div className="text-sm text-gray-400 italic animate-pulse">Bot is typing...</div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border rounded-lg px-3 py-2 text-sm shadow-sm"
          placeholder="Type a message..."
        />
        <Send className="cursor-pointer text-blue-600" onClick={sendMessage} />
      </div>
    </div>
  );
}
