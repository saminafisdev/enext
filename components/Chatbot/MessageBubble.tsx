// MessageBubble.tsx
export default function MessageBubble({ sender, text }: { sender: string; text: string }) {
  const isUser = sender === 'user';
  return (
    <div
      className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
        isUser ? 'bg-blue-100 self-end ml-auto text-right' : 'bg-gray-100 text-left'
      }`}
    >
      {text}
    </div>
  );
}