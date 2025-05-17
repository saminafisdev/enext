// // VoiceRecorder.tsx (basic version using Web Speech API)
// import { Mic } from "lucide-react";

// export default function VoiceRecorder({
//   onRecordingComplete,
// }: {
//   onRecordingComplete: (text: string) => void;
// }) {
//   const handleVoice = () => {
//     const recognition = new (
//       window as typeof window & {
//         webkitSpeechRecognition: new () => SpeechRecognition;
//       }
//     ).webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.onresult = (e: SpeechRecognitionResult) => {
//       const transcript = e.results[0][0].transcript;
//       onRecordingComplete(transcript);
//     };
//     recognition.start();
//   };

//   return <Mic className="cursor-pointer" onClick={handleVoice} />;
// }
