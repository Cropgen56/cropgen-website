"use client";
import Image from "next/image";
import { FaTractor, FaRegBuilding, FaGlobe } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { EllipsisVertical, MessageSquarePlus, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function ChatWindow({ onClose }) {
    const lines = [
        "Hi! I'm CropGen Assistant.",
        "Let's get to know each other. So, I can help you better.",
    ];

    const [displayedText, setDisplayedText] = useState(["", ""]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [roleSelected, setRoleSelected] = useState(false);


    useEffect(() => {
        if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            const timeout = setTimeout(() => {
            setDisplayedText((prev) => {
                const newText = [...prev];
                newText[lineIndex] += lines[lineIndex][charIndex];
                return newText;
            });
            setCharIndex(charIndex + 1);
            }, 100); 
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
            setLineIndex(lineIndex + 1);
            setCharIndex(0);
            }, 600);
            return () => clearTimeout(timeout);
        }
        }
    }, [charIndex, lineIndex]);

    const startNewChat = () => {
        setDisplayedText(["", ""]); 
        setLineIndex(0);
        setCharIndex(0);
        setMessages([]); 
        setInput("");
        setRoleSelected(false); 
    };


    // Send a message
     const sendMessage = (text, sender) => {
        if (!text.trim()) return;
        setMessages((prev) => [...prev, { text, sender }]);
        setInput("");
    };

    // Handle Enter key press
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage(input, "user");
        }
    };

    const handleRoleClick = (role) => {
        setRoleSelected(true);
        sendMessage(`I am ${role}`, "user");
    };

    return (
        <div className="relative">
            <div className="w-[300px] h-[450px] sm:w-[400px] sm:h-[500px] bg-white rounded-2xl shadow-md shadow-gray-200 z-50 flex flex-col gap-2 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/image/comman/chatbot-bg.svg')" }}>
                
                {/* Header */}
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-3">
                        <EllipsisVertical size={18} color="#000" className="cursor-pointer" />
                        <span className="text-black text-sm font-semibold">CropGen</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MessageSquarePlus size={16} className="text-gray-600 cursor-pointer" onClick={startNewChat} />
                        <X size={16} className="text-gray-600 cursor-pointer" onClick={onClose} />
                    </div>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-center justify-center gap-1">
                    <Image
                        src="/assets/image/comman/chatbot-logo.svg"
                        alt="chatbot logo"
                        width={50}
                        height={50}
                    />
                    <p className="text-center text-xs text-black">
                        {displayedText[0]}
                    </p>
                    <p className="text-center text-xs text-black">
                        {displayedText[1]}
                    </p>
                </div>

                {/* Main body */}
                <div className="flex-1 pr-0 pl-4 sm:px-4 py-2 overflow-y-auto flex flex-col scrollbar-custom mt-4">
                    {!roleSelected ? (
                        <div className="flex flex-col gap-2 mt-auto">
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-sm bg-[#EFFFF7] rounded-xl transition w-1/2 border-2 rounded-bl-none border-white "
                                onClick={() => handleRoleClick("a Farmer")}
                            >
                                <Image src="/assets/image/comman/farmer.svg" alt="Farmer" width={20} height={20} /> I'm a Farmer
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-sm bg-[#EFFFF7] rounded-xl transition w-[80%] sm:w-2/3 border-2 rounded-bl-none border-white"
                                onClick={() => handleRoleClick("from an Organization")}
                            >
                                <Image src="/assets/image/comman/organization.svg" alt="organization" width={20} height={20} /> I'm from an Organization
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-sm bg-[#EFFFF7] rounded-xl transition w-2/3 sm:w-1/2 border-2 rounded-bl-none border-white"
                                onClick={() => handleRoleClick("just Exploring")}
                            >
                                <Image src="/assets/image/comman/earth-leaf.svg" alt="earth-leaf" width={20} height={20} />I'm just Exploring
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`py-2 px-3 rounded-xl text-sm max-w-[80%] ${
                                        msg.sender === "user"
                                            ? "bg-green-50 border border-green-200 self-end rounded-br-none"
                                            : "bg-gray-50 border border-gray-200 self-start rounded-bl-none"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="flex flex-col items-center justify-center gap-2 p-2">
                    <div className={`flex items-center bg-white w-full rounded-xl px-4 py-2 border border-[#868686] ${
                            !roleSelected ? "opacity-50 cursor-not-allowed" : ""
                        }`} >

                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your question… e.g., 'Best fertilizer for wheat?"
                            className="flex-1 outline-none text-xs bg-white text-gray-700"
                            disabled={!roleSelected} />
                        <IoSend
                            className="text-[#28C878] cursor-pointer"
                            size={18}
                            onClick={() => roleSelected && sendMessage(input, "user")} />
                        
                    </div>
                    <p className="text-[10px] text-gray-400">
                        Cropgen may produce inaccurate information
                    </p>
                </div>
            </div>
        </div>
    );
}
