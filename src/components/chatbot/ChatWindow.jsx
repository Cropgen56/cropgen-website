"use client";
import Image from "next/image";
import { IoSend } from "react-icons/io5";
import {
    EllipsisVertical,
    ChevronLeft,
    X,
    Paperclip,
    History as HistoryIcon,
    ArrowDownToLine,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { io } from "socket.io-client";

export default function ChatWindow({ onClose, onBack }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [roleSelected, setRoleSelected] = useState(false);
    const socketRef = useRef(null);
    const fileInputRef = useRef(null);
    const messagesEndRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const TypingLoader = () => (
        <div className="flex gap-1 items-end h-6">
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="w-2.5 h-2.5 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            ))}
        </div>
    );

    useEffect(() => {
        socketRef.current = io("https://server.cropgenapp.com", {
            path: "/v3/socket.io",
            transports: ["websocket"],
        });
        setLoading(false);
        socketRef.current.on("ai_response", (msg) => {
            setLoading(false);
            setMessages((prev) => [...prev, { text: msg, sender: "bot" }]);

        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, loading]);


    const sendMessage = (text, sender) => {
        if (!text.trim()) return;

        setMessages((prev) => [...prev, { text, sender }]);
        setInput("");

        if (sender === "user" && socketRef.current) {
            setLoading(true);
            socketRef.current.emit("user_message", text);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && roleSelected) sendMessage(input, "user");
    };

    const handleRoleClick = (role) => {
        setRoleSelected(true);

        let choice = "3";
        if (role === "Farmer") choice = "2";
        if (role === "Agribusiness / AgTech Professional") choice = "1";

        // Show friendly message locally
        setMessages((prev) => [...prev, { text: `I am ${role}`, sender: "user" }]);

        // Only send the numeric choice to server
        if (socketRef.current) {
            socketRef.current.emit("user_message", choice);
        }
    };


    const handleFileClick = () => fileInputRef.current?.click();

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        Array.from(files).forEach((file) => {
            const type = file.type.startsWith("image/") ? "image" : "file";
            setMessages((prev) => [...prev, { sender: "user", type, file }]);
        });

        e.target.value = null;
    };

    return (
        <div className="relative w-[300px] h-[450px] sm:w-[400px] sm:h-[500px] rounded-2xl p-[2px] bg-gradient-to-br from-[#28C878AB] to-[#C4E930A3] shadow-[0_0_25px_rgba(42,182,115,0.3)]">
            {/* Inner white card */}
            <div className="w-full h-full rounded-[calc(theme(borderRadius.2xl)-2px)] flex flex-col overflow-hidden shadow-[0_0_20px_rgba(42,182,115,0.2)]
  bg-[radial-gradient(circle_at_20%_60%,_#28C878AB_2%,_#ffffff_70%)]">
                {/* Header */}
                <div className="flex justify-between items-center p-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <ChevronLeft
                            className="cursor-pointer text-black"
                            size={18}
                            onClick={onBack}
                        />
                        <Image
                            src="/assets/image/comman/chatbot-logo.svg"
                            alt="cropgen logo"
                            width={24}
                            height={24}
                        />
                        <span className="text-black text-xs font-semibold">CropGen</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <EllipsisVertical
                            size={18}
                            className="cursor-pointer text-black"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                        <X size={16} className="cursor-pointer text-black" onClick={onClose} />
                    </div>
                </div>

                {/* Dropdown */}
                {menuOpen && (
                    <div className="absolute top-12 right-4 bg-white shadow-lg rounded-lg p-2 w-28 z-30">
                        <button className="flex items-center gap-2 w-full text-sm font-medium p-1 hover:bg-gray-100 rounded">
                            <HistoryIcon className="text-black" size={16} /> History
                        </button>
                        <button className="flex items-center gap-2 w-full text-sm font-medium p-1 hover:bg-gray-100 rounded">
                            <ArrowDownToLine size={16} /> Download
                        </button>
                    </div>
                )}

                {/* Chat Body */}
                <div className="flex-1 px-4 py-3 overflow-y-auto flex flex-col gap-1 scrollbar-custom">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`px-3 py-2 rounded-xl text-xs max-w-[75%] ${msg.sender === "user"
                                ? "bg-white border border-gray-200 self-end rounded-br-none"   // user white bg
                                : "bg-green-200    self-start rounded-bl-none" // bot light green bg
                                }`}
                        >
                            {msg.type === "image" && (
                                <img
                                    src={URL.createObjectURL(msg.file)}
                                    alt={msg.file.name}
                                    className="max-w-full h-auto rounded"
                                />
                            )}
                            {msg.type === "file" && (
                                <a
                                    href={URL.createObjectURL(msg.file)}
                                    target="_blank"
                                    className="text-blue-500 underline text-xs"
                                >
                                    {msg.file.name}
                                </a>
                            )}
                            {msg.text &&
                                msg.text.split("\n").map((line, i) => (
                                    <p key={i} className="m-0">
                                        {line}
                                    </p>
                                ))}
                        </div>
                    ))}

                    {loading && (
                        <div className="px-3 py-2 rounded-xl  self-start">
                            <TypingLoader />
                        </div>
                    )}
                    <div ref={messagesEndRef} />


                    {/* Role buttons */}
                    {!roleSelected && (
                        <div className="flex flex-col gap-2">
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-xs bg-white rounded-xl w-fit border border-gray-200 shadow-sm hover:shadow-md transition rounded-bl-none"
                                onClick={() => handleRoleClick("Farmer")}
                            >
                                <Image
                                    src="/assets/image/comman/farmer.svg"
                                    alt="Farmer"
                                    width={18}
                                    height={18}
                                />{" "}
                                Farmer
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-xs bg-white rounded-xl w-fit border border-gray-200 shadow-sm hover:shadow-md transition rounded-bl-none whitespace-nowrap"
                                onClick={() => handleRoleClick("Agribusiness / AgTech Professional")}
                            >
                                <Image
                                    src="/assets/image/comman/organization.svg"
                                    alt="organization"
                                    width={18}
                                    height={18}
                                />{" "}
                                Agribusiness / AgTech Professional
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-xs bg-white rounded-xl w-fit border border-gray-200 shadow-sm hover:shadow-md transition rounded-bl-none"
                                onClick={() => handleRoleClick("Just Exploring")}
                            >
                                <Image
                                    src="/assets/image/comman/earth-leaf.svg"
                                    alt="exploring"
                                    width={18}
                                    height={18}
                                />{" "}
                                Just Exploring
                            </button>
                        </div>
                    )}
                </div>

                {/* Input Bar */}
                <div className="p-3">
                    <div
                        className={`flex flex-col items-center gap-2 bg-white rounded-xl px-3 py-1.5 h-[80px] border border-gray-300 shadow-sm ${!roleSelected ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Monitor crops, get accurate farm insights, and boost yields."
                            className="flex-1 w-full outline-none text-xs bg-transparent text-gray-700"
                            disabled={!roleSelected}
                        />
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex items-center gap-1.5">
                                <Paperclip
                                    color="#9A9898"
                                    size={16}
                                    className="cursor-pointer"
                                    onClick={handleFileClick}
                                />
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                    multiple
                                    accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                />
                            </div>

                            <IoSend
                                className="text-[#28C878] cursor-pointer"
                                size={20}
                                onClick={() => roleSelected && sendMessage(input, "user")}
                            />
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1 text-center">
                        By using CropGen, you agree to our{" "}
                        <Link href="/terms-conditions" className="text-green-500 cursor-pointer">
                            Terms & Conditions
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
