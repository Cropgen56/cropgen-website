"use client";
import { useState } from "react";
import ChatWindow from "./ChatWindow";
import Image from "next/image";
import WelcomeScreen from "./WelcomeScreen";

export default function ChatbotButton() {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [hover, setHover] = useState(false);
    const [showChat, setShowChat] = useState(false);


    const handleClose = () => {
        setClosing(true);
        setHover(false);
        setTimeout(() => {
            setOpen(false);
            setClosing(false);
            setShowChat(false); 
        }, 300);
    };

    return (
        <>
            {/* Floating Chat Icon */}
            {!open && (
                <div
                    className="fixed bottom-20 right-5 z-50 flex items-center gap-2"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => setOpen(!open)} >
                    
                    <button className={`flex items-center bg-[#28C878] hover:bg-green-600 text-white shadow-md rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${hover ? "px-4 h-12 w-40" : "p-2.5 h-12 w-12"
                        }`} >
                        <Image
                            src="/assets/image/comman/chatbot.svg"
                            alt="Chatbot Icon"
                            width={28}
                            height={28}
                            className="flex-shrink-0"
                        />
                        <span className={`ml-2 whitespace-nowrap transition-opacity duration-300 text-md font-semibold ${hover ? "opacity-100" : "opacity-0"
                            }`} >
                            Ask CropGen
                        </span>
                    </button>

                </div>
            )}

            {/* Chat Window */}
            {open && (
                <div className={`fixed bottom-8 right-5 z-50 ${
                        closing ? "animate-chatSlideDown" : "animate-chatSlideUp"
                    }`} >
                    
                    {!showChat ? (
                        <WelcomeScreen onClose={handleClose} onContinue={() => setShowChat(true)} />
                    ) : (
                        <ChatWindow onClose={handleClose} onBack={() => setShowChat(false)} />
                    )}

                </div>
            )}
        </>
    );
}
