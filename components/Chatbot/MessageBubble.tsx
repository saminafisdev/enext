// MessageBubble.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { User, Bot } from "lucide-react";

export default function MessageBubble({
  sender,
  text,
}: {
  sender: string;
  text: string;
}) {
  const isUser = sender === "user";
  const lines = text.split("\n").filter(Boolean);
  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const messageRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState<string[]>([]);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    let index = 0;
    const formattedLines = lines.map((line) =>
      line.replace(/(\$\d+)/g, "💰 $1").replace(/(\d+% off)/gi, "🔖 $1")
    );

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const next = [...prev, formattedLines[index]];
        index++;
        if (index === formattedLines.length) clearInterval(interval);
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [text, lines]);

  return (
    <div
      ref={messageRef}
      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
    >
      <div
        className={`flex items-end gap-2 ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="p-1 bg-gray-200 rounded-full">
          {isUser ? (
            <User className="w-4 h-4 text-blue-600" />
          ) : (
            <Bot className="w-4 h-4 text-green-600" />
          )}
        </div>
        <div
          className={`max-w-xs px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${
            isUser ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
          }`}
        >
          {displayedText.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
      <span className="text-[10px] text-gray-400 mt-1">{timestamp}</span>
    </div>
  );
}
