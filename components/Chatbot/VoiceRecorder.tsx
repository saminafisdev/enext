// VoiceRecorder.tsx (basic version using Web Speech API)
import { Mic } from 'lucide-react';

export default function VoiceRecorder({ onRecordingComplete }: { onRecordingComplete: (text: string) => void }) {
  const handleVoice = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      onRecordingComplete(transcript);
    };
    recognition.start();
  };

  return <Mic className="cursor-pointer" onClick={handleVoice} />;
}
