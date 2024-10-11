"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Mic, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Message = {
  type: "user" | "ai";
  content: string;
};
export default function CallFunction() {
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null); // Fix the typing here

  const [equalizerValues, setEqualizerValues] = useState(Array(10).fill(0));

  useEffect(() => {
    speechSynthesisRef.current = window.speechSynthesis;
    return () => {
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setEqualizerValues(equalizerValues.map(() => Math.random() * 100));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isListening]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { type: "user", content: inputText }]);
      setInputText("");
      // Simulate AI response
      setTimeout(() => {
        const aiResponse =
          "I'm here to support you. How can I help with your mental health today?";
        setMessages((prev) => [...prev, { type: "ai", content: aiResponse }]);
        if (isVoiceMode) {
          speakText(aiResponse);
        }
      }, 1000);
    }
  };

  const handleVoiceToggle = () => {
    setIsVoiceMode(!isVoiceMode);
    if (!hasPermission) {
      requestMicrophonePermission();
    }
  };

  const requestMicrophonePermission = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => setHasPermission(true))
      .catch(() => alert("Microphone permission is required for voice chat."));
  };

  const startListening = () => {
    setIsListening(true);
    // Simulate voice recording for 5 seconds
    setTimeout(() => {
      setIsListening(false);
      const userMessage = "This is a simulated voice message.";
      setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = "I heard you. How else can I assist you today?";
        setMessages((prev) => [...prev, { type: "ai", content: aiResponse }]);
        speakText(aiResponse);
      }, 1000);
    }, 5000);
  };

  const speakText = (text: string | undefined) => {
    if (speechSynthesisRef.current) {
      speechSynthesisRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesisRef.current.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col p-4">
      <div className="max-w-3xl w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mental Health AI Assistant</h1>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px] bg-blue-500 text-white border-white">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
          style={{ maxHeight: "60vh" }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg p-2 max-w-[70%] ${
                  message.type === "user"
                    ? "bg-blue-200 text-gray-800"
                    : "bg-blue-100 text-gray-700"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4 bg-blue-50">
          {!isVoiceMode && (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          )}
          {isVoiceMode && (
            <div className="flex items-center justify-between">
              <Button
                onClick={startListening}
                className={`bg-blue-600 hover:bg-blue-700 ${
                  isListening ? "animate-pulse" : ""
                }`}
                disabled={isListening || isSpeaking}
              >
                <Mic className="h-5 w-5 mr-2" />
                {isListening
                  ? "Listening..."
                  : isSpeaking
                  ? "AI Speaking..."
                  : "Start Talking"}
              </Button>
              <div className="flex space-x-1">
                {equalizerValues.map((value, index) => (
                  <div
                    key={index}
                    className="w-1 bg-blue-400"
                    style={{
                      height: `${value}%`,
                      transition: "height 0.1s ease",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <Switch
                checked={isVoiceMode}
                onCheckedChange={handleVoiceToggle}
                className="data-[state=checked]:bg-blue-600"
              />
              <span className="text-sm text-gray-600">
                {isVoiceMode ? "Voice Mode" : "Text Mode"}
              </span>
            </div>
            <Link href="/personalDashboard/moodTracker">
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Mental Health Tracking
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {!hasPermission && (
        <div className="mt-4 p-4 bg-yellow-100 rounded-lg text-yellow-800 max-w-3xl mx-auto">
          <p className="text-center">
            Please allow access to your microphone and speakers for the best
            experience.
          </p>
        </div>
      )}
    </div>
  );
}
