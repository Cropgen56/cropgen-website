"use client";

import Image from "next/image";
import { IoSend } from "react-icons/io5";
import 'remixicon/fonts/remixicon.css';

import { motion, AnimatePresence } from "framer-motion";

import {
  EllipsisVertical,
  ChevronLeft,
  X,
  Paperclip,
  History as HistoryIcon,
  ArrowDownToLine,
} from "lucide-react";
import { MessageSquare, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { io } from "socket.io-client";
import { Trash2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ChatWindow({ onClose, onBack }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [roleSelected, setRoleSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewingHistory, setViewingHistory] = useState(false);

  const [dynamicInput, setDynamicInput] = useState(null); // Inline AI-triggered input
  const [dynamicValue, setDynamicValue] = useState("");

  const socketRef = useRef(null);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // store all past chats
  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  const roleButtonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

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

  const welcomeMessage = {
    text: "Welcome! To help you better, could you tell me who you are?",
    sender: "bot",
  };

  const resetChat = () => {
    if (messages.length > 0) {
      setChatHistory((prev) => [
        ...prev,
        { id: Date.now(), messages, createdAt: new Date().toISOString() },
      ]);
    }

    setMessages([welcomeMessage]);
    setInput("");
    setRoleSelected(false);
    setDynamicInput(null);
    setDynamicValue("");
    setLoading(false);

    if (socketRef.current) {
      socketRef.current.emit("reset_conversation");
    }
  };

  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_AGENT, {
      path: "/v3/socket.io",
      transports: ["websocket"],
    });
    setLoading(false);

    socketRef.current.on("ai_response", (msg) => {
      setLoading(false);

      if (msg.toLowerCase().includes("what is your name")) {
        setDynamicInput({
          id: Date.now(),
          placeholder: "Enter your name",
          type: "text",
        });
      } else if (msg.toLowerCase().includes("what is your contact number")) {
        setDynamicInput({
          id: Date.now(),
          placeholder: "Enter your contact number",
          type: "tel",
        });
      } else if (
        msg.toLowerCase().includes("what is the name of your organization")
      ) {
        setDynamicInput({
          id: Date.now(),
          placeholder: "Enter your organization name",
          type: "text",
        });
      } else if (
        msg
          .toLowerCase()
          .includes("what is the contact number of your organization")
      ) {
        setDynamicInput({
          id: Date.now(),
          placeholder: "Enter organization contact number",
          type: "tel",
        });
      } else if (
        msg
          .toLowerCase()
          .includes("what is the email address of your organization")
      ) {
        setDynamicInput({
          id: Date.now(),
          placeholder: "Enter organization email address",
          type: "email",
        });
      }

      setMessages((prev) => [...prev, { text: msg, sender: "bot" }]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, dynamicInput]);

  // Send message
  const sendMessage = (text, sender) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { text, sender }]);

    // Clear inputs
    if (sender === "user") {
      setInput(""); // clear main input
      setDynamicValue(""); // clear dynamic AI input
    }

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

    setMessages((prev) => [...prev, { text: `I am ${role}`, sender: "user" }]);

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
      {/* Inner white card */}
      <div
        className="w-full h-full rounded-[calc(theme(borderRadius.2xl)-2px)] 
  flex flex-col overflow-hidden shadow-[0_0_20px_rgba(42,182,115,0.2)]  
  bg-white bg-[url('/assets/image/bg.svg')] bg-no-repeat 
  bg-[length:390px_auto] bg-[position:center_10%]"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-2 sm:p-3 border-b border-gray-200">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ChevronLeft
              className="cursor-pointer text-black"
              size={16}
              onClick={onBack}
            />
            <Image
              src="/assets/image/comman/chatbot-logo.svg"
              alt="cropgen logo"
              width={20}
              height={20}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="text-[#265A48] text-sm sm:text-md font-bold">CropGen</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Reset chat = message + icon */}
              <MessageSquare
                onClick={resetChat}
                className="cursor-pointer text-black"
                size={14}
              />

              {/* Open history = clock icon */}
              <Clock
                onClick={() => setHistoryOpen(true)}
                className="cursor-pointer text-black"
                size={14}
              />

              {/* Close chat */}
              <X
                size={14}
                className="cursor-pointer text-black"
                onClick={onClose}
              />
            </div>
          </div>
        </div>

        {historyOpen && (
          <div className="absolute inset-0 z-20 flex items-center justify-center p-2">
            <div
              className="w-full h-full rounded-[calc(theme(borderRadius.2xl)-2px)] 
      flex flex-col overflow-hidden shadow-[0_0_20px_rgba(42,182,115,0.2)]  
      bg-white bg-[url('/assets/image/bg.svg')] bg-no-repeat 
      bg-[length:390px_auto] bg-[position:center_10%]"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-2 sm:p-3 border-b border-gray-200">
                <span className="font-semibold text-xs sm:text-sm text-black">
                  Chat History
                </span>
                <X
                  className="cursor-pointer text-black"
                  size={14}
                  onClick={() => setHistoryOpen(false)}
                />
              </div>

              {/* History list */}
              <div className="flex-1 overflow-y-auto p-2 sm:p-3 text-[10px] sm:text-xs">
                {chatHistory.length === 0 ? (
                  <p className="text-gray-500 text-center text-[10px] sm:text-xs">
                    No history yet.
                  </p>
                ) : (
                  chatHistory.map((chat) => (
                    <div
                      key={chat.id}
                      className="p-1.5 sm:p-2 mb-2 border rounded cursor-pointer hover:bg-gray-50 bg-white/70"
                      onClick={() => {
                        setMessages(chat.messages); // restore messages
                        setViewingHistory(true); // enter view-only mode
                        setHistoryOpen(false);
                        setDynamicInput(null);
                        setRoleSelected(true);
                      }}
                    >
                      <p className="font-medium text-black text-[10px] sm:text-xs">
                        {new Date(chat.createdAt).toLocaleString()}
                      </p>
                      <p className="truncate text-gray-600 text-[10px] sm:text-xs">
                        {chat.messages[0]?.text}
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Clear all button */}
              <button
                onClick={() => setChatHistory([])}
                className="m-2 sm:m-3 py-1 sm:py-1.5 text-[10px] sm:text-xs bg-green-500 text-white rounded"
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        {/* Chat Body */}
        <div className="flex-1 px-3 sm:px-4 py-2 sm:py-3 overflow-y-auto flex flex-col gap-1 scrollbar-hide">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={messageVariants}
                className={`flex gap-1.5 sm:gap-2 items-start max-w-[75%] ${msg.sender === "user" ? "self-end flex-row-reverse" : "self-start"
                  }`}
              >
                {/* Icon */}
                <i
                  className={`text-base sm:text-xl ${msg.sender === "user"
                      ? "ri-user-3-fill text-green-500"
                      : "ri-robot-2-fill text-green-700"
                    }`}
                ></i>

                {/* Bubble */}
                <div
                  className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs ${msg.sender === "user"
                      ? "bg-white border border-gray-200 rounded-br-none"
                      : "bg-green-200 rounded-bl-none"
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
                      className="text-blue-500 underline text-[10px] sm:text-xs"
                    >
                      {msg.file.name}
                    </a>
                  )}
                  {msg.text && (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={oneDark}
                              language={match[1]}
                              PreTag="div"
                              className="rounded-lg text-[10px] sm:text-xs"
                              {...props}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          ) : (
                            <code
                              className="bg-gray-200 px-1 py-0.5 rounded text-[9px] sm:text-[10px]"
                              {...props}
                            >
                              {children}
                            </code>
                          );
                        },
                        p({ children }) {
                          return (
                            <p className="text-gray-800 text-[10px] sm:text-xs leading-relaxed mb-1">
                              {children}
                            </p>
                          );
                        },
                        li({ children }) {
                          return (
                            <li className="list-disc ml-3 sm:ml-4 text-[10px] sm:text-xs text-gray-800">
                              {children}
                            </li>
                          );
                        },
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>


          {/* Typing Loader */}
          {loading && (
            <div className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl self-start">
              <TypingLoader />
            </div>
          )}

          {/* Dynamic AI Input */}
          {dynamicInput && (
            <div className="flex items-center gap-1.5 sm:gap-2 mt-2">
              {dynamicInput.type === "tel" ? (
                <>
                  {/* Country Code Dropdown */}
                  <select
                    value={dynamicValue.split(" ")[0] || "+91"}
                    onChange={(e) => {
                      const code = e.target.value;
                      const number = dynamicValue.split(" ")[1] || "";
                      setDynamicValue(`${code} ${number}`);
                    }}
                    className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-[10px] sm:text-xs border rounded-xl outline-none bg-white"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>

                  {/* Phone Number Input */}
                  <input
                    type="tel"
                    placeholder={dynamicInput.placeholder}
                    value={dynamicValue.split(" ")[1] || ""}
                    onChange={(e) => {
                      const code = dynamicValue.split(" ")[0] || "+91";
                      setDynamicValue(`${code} ${e.target.value}`);
                    }}
                    className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs border rounded-xl outline-none"
                  />
                </>
              ) : (
                // Default Input for text/email/etc
                <input
                  type={dynamicInput.type}
                  placeholder={dynamicInput.placeholder}
                  value={dynamicValue}
                  onChange={(e) => setDynamicValue(e.target.value)}
                  className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs border rounded-xl outline-none"
                />
              )}

              {/* Send Button */}
              <button
                className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-white bg-green-500 rounded-xl"
                onClick={() => {
                  if (!dynamicValue.trim()) return;
                  sendMessage(dynamicValue, "user"); // full number with code
                  setDynamicInput(null);
                  setDynamicValue("");
                }}
              >
                Send
              </button>
            </div>
          )}
          {/* Role buttons */}
          {!roleSelected && (
            <div className="flex flex-col gap-1.5 sm:gap-2 mt-2">
              <AnimatePresence>
                {["Farmer", "Agribusiness / AgTech Professional", "Just Exploring"].map((role, idx) => (
                  <motion.button
                    key={role}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={roleButtonVariants}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs bg-white rounded-xl w-fit border border-gray-200 shadow-sm hover:shadow-md transition rounded-bl-none"
                    onClick={() => handleRoleClick(role)}
                  >
                    <Image
                      src={
                        role === "Farmer"
                          ? "/assets/image/comman/farmer.svg"
                          : role === "Agribusiness / AgTech Professional"
                            ? "/assets/image/comman/organization.svg"
                            : "/assets/image/comman/earth-leaf.svg"
                      }
                      alt={role}
                      width={16}
                      height={16}
                      className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                    />
                    <span className="hidden sm:inline">{role}</span>
                    <span className="sm:hidden">
                      {role === "Agribusiness / AgTech Professional" ? "AgTech Pro" : role === "Just Exploring" ? "Exploring" : role}
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        {/* Input Bar */}
        {!viewingHistory && (
          <div className="p-2 sm:p-3">
            <div
              className={`flex flex-col items-center gap-1.5 sm:gap-2 bg-white rounded-xl px-2 sm:px-3 py-1 sm:py-1.5 h-[70px] sm:h-[80px] border border-gray-300 shadow-sm ${!roleSelected || dynamicInput
                  ? "opacity-80 cursor-not-allowed"
                  : ""
                }`}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Monitor crops & boost yields"
                className="flex-1 w-full outline-none text-[10px] sm:text-xs bg-transparent text-gray-700 placeholder:text-[10px] sm:placeholder:text-xs"
                disabled={!roleSelected || dynamicInput}
              />
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Paperclip
                    color="#9A9898"
                    size={14}
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
                  size={18}
                  onClick={() =>
                    roleSelected && !dynamicInput && sendMessage(input, "user")
                  }
                />
              </div>
            </div>
            <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1 text-center">
              By using CropGen, you agree to our{" "}
              <Link
                href="/terms-conditions"
                className="text-green-500 cursor-pointer"
              >
                Terms and Conditions
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
