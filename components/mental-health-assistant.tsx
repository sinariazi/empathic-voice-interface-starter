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
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);
  const [equalizerValues, setEqualizerValues] = useState(Array(10).fill(0));
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);


  useEffect(() => {
    speechSynthesisRef.current = window.speechSynthesis;

    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language;
    } else {
      // TODO : need to add cloud solution for speech recognition if its not availabe for the older browsers and complex languages 
      console.warn("SpeechRecognition is not supported in this browser.");
    }

    return () => {
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
      stopListening();
    };
  }, [language]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isListening) {
      startAudioVisualization();
    } else {
      stopAudioVisualization();
    }
    return () => stopAudioVisualization();
  }, [isListening]);

  const startAudioVisualization = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);
      analyserRef.current.fftSize = 32;
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const updateEqualizer = () => {
        if (analyserRef.current) {
          analyserRef.current.getByteFrequencyData(dataArray);
          const values = Array.from(dataArray.slice(0, 10)).map(
            (value) => (value / 255) * 100
          );
          setEqualizerValues(values);
        }
        animationFrameRef.current = requestAnimationFrame(updateEqualizer);
      };

      updateEqualizer();
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopAudioVisualization = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setEqualizerValues(Array(10).fill(0));
  };

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
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessages((prev) => [...prev, { type: "user", content: transcript }]);
        handleAIResponse();
      };
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleAIResponse = () => {
    setTimeout(() => {
      const aiResponse =
        "I heard you. How else can I assist you today? حال شما چطوره ";
      setMessages((prev) => [...prev, { type: "ai", content: aiResponse }]);
      if (isVoiceMode) {
        speakText(aiResponse);
      }
    }, 1000);
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isVoiceMode) {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col p-2 sm:p-4">
      <div className="max-w-3xl w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div className="bg-blue-600 p-3 sm:p-4 text-white flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <h1 className="text-xl sm:text-2xl font-bold">
            Mental Health AI Assistant
          </h1>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full sm:w-[180px] bg-blue-500 text-white border-white">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
              <SelectItem value="fa">Farsi </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4"
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
                className={`rounded-lg p-2 max-w-[90%] sm:max-w-[70%] ${
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

        <div className="border-t border-gray-200 p-3 sm:p-4 bg-blue-50">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isVoiceMode ? "Voice mode active" : "Type your message..."
              }
              className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isVoiceMode}
            />
            {!isVoiceMode && (
              <Button
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
              </Button>
            )}
          </div>
          {isVoiceMode && (
            <div className="flex flex-col sm:flex-row items-center justify-between mt-3 space-y-2 sm:space-y-0">
              <Button
                onClick={isListening ? stopListening : startListening}
                className={`w-full sm:w-auto bg-blue-600 hover:bg-blue-700 ${
                  isListening ? "animate-pulse" : ""
                }`}
                disabled={isSpeaking}
              >
                <Mic className="h-5 w-5 mr-2" />
                {isListening
                  ? "Listening..."
                  : isSpeaking
                  ? "AI Speaking..."
                  : "Start Talking"}
              </Button>
              <div className="flex space-x-1 h-10 items-end">
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
          <div className="flex flex-col sm:flex-row items-center justify-between mt-3 sm:mt-4 space-y-2 sm:space-y-0">
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
                className="w-full sm:w-auto text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Mental Health Tracking
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {!hasPermission && (
        <div className="mt-4 p-3 sm:p-4 bg-yellow-100 rounded-lg text-yellow-800 max-w-3xl mx-auto">
          <p className="text-center text-sm sm:text-base">
            Please allow access to your microphone and speakers for the best
            experience.
          </p>
        </div>
      )}
    </div>
  );
}
