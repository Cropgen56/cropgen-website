// "use client";
// import Image from "next/image";
// import { IoSend } from "react-icons/io5";
// import { EllipsisVertical, ChevronLeft, X, History as HistoryIcon, ArrowDownToLine } from "lucide-react";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function ChatWindow({ onClose, onBack }) {
//     const lines = [
//         "Hi! Welcome to CropGen. India's first AI & Sattelite based farming Assistant platform.",
//         "I can help you monitor crops, get accurtae farm insight & boots yields.",
//     ];

//     const [menuOpen, setMenuOpen] = useState(false);
//     const [displayedText, setDisplayedText] = useState(["", ""]);
//     const [lineIndex, setLineIndex] = useState(0);
//     const [charIndex, setCharIndex] = useState(0);
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState("");
//     const [roleSelected, setRoleSelected] = useState(false);
//     const [logo, setLogo] = useState(0);

//     useEffect(() => {
//         if (lineIndex < lines.length) {
//             if (charIndex < lines[lineIndex].length) {
//             const timeout = setTimeout(() => {
//                 setDisplayedText((prev) => {
//                 const newText = ["", ""]; // reset both lines
//                 newText[lineIndex] = prev[lineIndex] + lines[lineIndex][charIndex];
//                 return newText;
//                 });
//                 setCharIndex(charIndex + 1);
//             }, 70);
//             return () => clearTimeout(timeout);
//             } else {
//             // Wait before switching to the next line
//             const timeout = setTimeout(() => {
//                 setLineIndex(lineIndex + 1);
//                 setCharIndex(0);
//             }, 800);
//             return () => clearTimeout(timeout);
//             }
//         }
//     }, [charIndex, lineIndex]);

    
//     const startNewChat = () => {
//         setDisplayedText(["", ""]);
//         setLineIndex(0);
//         setCharIndex(0);
//         setMessages([]);
//         setInput("");
//         setRoleSelected(false);

//         setLogo(prev => prev + 1);
//     };


//     // Send a message
//      const sendMessage = (text, sender) => {
//         if (!text.trim()) return;
//         setMessages((prev) => [...prev, { text, sender }]);
//         setInput("");
//     };

//     // Handle Enter key press
//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             sendMessage(input, "user");
//         }
//     };

//     const handleRoleClick = (role) => {
//         setRoleSelected(true);
//             sendMessage("To help you better, could you tell me who you are?", "bot");
//         sendMessage(`I am ${role}`, "user");
//     };

//     return (
//         <div className="relative">
//             {/* <div className="w-[300px] h-[450px] sm:w-[400px] sm:h-[500px] bg-white rounded-2xl shadow-md shadow-gray-200  z-50 flex flex-col gap-2 overflow-hidden bg-cover bg-center " */}
//             <div className="relative w-[300px] h-[450px] sm:w-[400px] sm:h-[500px] rounded-2xl p-[2.5px] shadow-[0_0_30px_0_rgba(42,182,115,0.6)]">
//                 <div className="w-full h-full bg-white rounded-[calc(theme(borderRadius.2xl)-2px)] flex flex-col gap-2 overflow-hidden bg-cover bg-center">
                
//                     {/* Header */}
//                     <div className="flex justify-between items-center p-4 border-b border-gray-300">
//                         <div className="flex items-center gap-2">
//                             <ChevronLeft color="#000" className="cursor-pointer" onClick={onBack} />
//                             <span className="flex items-center gap-1">
//                                 <Image
//                                     src="/assets/image/comman/chatbot-logo.svg"
//                                     alt="cropgen logo"
//                                     width={25}
//                                     height={25}
//                                 />
//                                 <span className="text-black text-[10px] font-semibold">CropGen</span>
//                             </span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <EllipsisVertical size={18} color="#000" className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
//                             <X size={16} className="text-black cursor-pointer" onClick={onClose} />
//                         </div>
//                     </div>

//                     {/* Dropdown Menu */}
//                     {menuOpen && (
//                         <div className="absolute top-12 right-4 bg-white shadow-lg rounded-lg p-2 w-28 z-30">
//                             <button className="flex items-center gap-2 w-full text-sm font-medium p-1 hover:bg-gray-100 transition-all ease-in-out duration-300 rounded">
//                                 <HistoryIcon  className="text-black" size={16} /> History
//                             </button>
//                             <button className="flex items-center gap-2 w-full text-sm font-medium p-1 hover:bg-gray-100 transition-all ease-in-out duration-300 rounded">
//                                 <ArrowDownToLine size={16} /> Download
//                             </button>
//                         </div>
//                     )}

//                     {/* Logo */}
//                     {/* <div className="flex flex-col items-center justify-center gap-1">
//                         <Image
//                             key={logo}
//                             src="/assets/image/comman/chatbot-logo.svg"
//                             alt="chatbot logo"
//                             width={50}
//                             height={50}
//                             className="animate-logoBounceUp"
//                         />
//                         <p className="text-center text-xs text-black w-[65%] flex items-start justify-center gap-1">
//                             {lineIndex === 0 && (
//                                 <Image
//                                     src="/assets/image/comman/leaf.png"
//                                     alt="Leaf"
//                                     width={14}
//                                     height={14}
//                                 />
//                             )}
//                             {displayedText[0]}
//                         </p>
//                         <p className="text-center text-xs text-black w-[60%]">
//                             {displayedText[1]}
//                         </p>
//                     </div> */}

//                     {/* Main body */}
//                     <div className="flex-1 pr-0 pl-4 sm:px-4 py-2 overflow-y-auto flex flex-col scrollbar-custom mt-4">
//                         {!roleSelected ? (
//                             <div className="flex flex-col gap-2 mt-auto">
//                                 <p className="text-xs text-black mb-2">
//                                     To help you better, could you tell me who you are?
//                                 </p>
//                                 <button
//                                     className="flex items-center gap-2 px-4 py-2 text-xs bg-[#EFFFF7] rounded-xl transition w-[40%] sm:w-1/3 border-2 rounded-bl-none border-white "
//                                     onClick={() => handleRoleClick("Farmer")}
//                                 >
//                                     <Image src="/assets/image/comman/farmer.svg" alt="Farmer" width={20} height={20} /> Farmer
//                                 </button>
//                                 <button
//                                     className="flex items-center gap-2 px-4 py-2 text-xs bg-[#EFFFF7] rounded-xl transition w-[90%] sm:w-3/4 border-2 rounded-bl-none border-white whitespace-nowrap"
//                                     onClick={() => handleRoleClick("Agribusiness / AgTech Professional")}
//                                 >
//                                     <Image src="/assets/image/comman/organization.svg" alt="organization" width={20} height={20} /> Agribusiness / AgTech Professional
//                                 </button>
//                                 <button
//                                     className="flex items-center gap-2 px-4 py-2 text-xs bg-[#EFFFF7] rounded-xl transition w-2/3 sm:w-1/2 border-2 rounded-bl-none border-white"
//                                     onClick={() => handleRoleClick("just Exploring")}
//                                 >
//                                     <Image src="/assets/image/comman/earth-leaf.svg" alt="earth-leaf" width={20} height={20} />Just Exploring
//                                 </button>
//                             </div>
//                         ) : (
//                             <div className="flex flex-col gap-2">
//                                 {messages.map((msg, idx) => (
//                                     <div
//                                         key={idx}
//                                         className={`py-2 px-3 rounded-xl text-xs max-w-[70%] ${
//                                             msg.sender === "user"
//                                                 ? "bg-green-50 border border-green-200 self-end rounded-br-none"
//                                                 : "bg-[#EFFFF7] border-2 rounded-bl-none border-white self-start"
//                                         }`}
//                                     >
//                                         {msg.text}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     {/* Input Area */}
//                     <div className="flex flex-col items-center justify-center gap-2 p-2">
//                         <div className={`flex items-center bg-white w-full rounded-xl px-4 py-2 border border-[#868686] ${
//                                 !roleSelected ? "opacity-50 cursor-not-allowed" : ""
//                             }`} >

//                             <input
//                                 type="text"
//                                 value={input}
//                                 onChange={(e) => setInput(e.target.value)}
//                                 onKeyDown={handleKeyDown}
//                                 placeholder="Type your question… e.g., 'Best fertilizer for wheat?"
//                                 className="flex-1 outline-none text-xs bg-white text-gray-700"
//                                 disabled={!roleSelected} />
//                             <IoSend
//                                 className="text-[#28C878] cursor-pointer"
//                                 size={18}
//                                 onClick={() => roleSelected && sendMessage(input, "user")} />
                            
//                         </div>
//                         <p className="text-[10px] text-gray-400">
//                             By using CropGen, you agree to our{" "}
//                             <Link href="/terms-conditions" className="text-green-500 cursor-pointer">
//                                 Terms & Conditions
//                             </Link>.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";
import Image from "next/image";
import { IoSend } from "react-icons/io5";
import { EllipsisVertical, ChevronLeft, X, Smile, Paperclip, History as HistoryIcon, ArrowDownToLine } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ChatWindow({ onClose, onBack }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [roleSelected, setRoleSelected] = useState(false);

    const initialMessages = [
        { 
            text: `Hi! Welcome to CropGen AI & satellite-based farming advisory platform.
                    I can help you monitor crops, get accurate farm insights, and boost yields.`, 
            sender: "bot" 
        },
        { text: "To help you better, could you tell me who you are?", sender: "bot" }
    ];

    useEffect(() => {
        let timeoutIds = [];

        initialMessages.forEach((msg, index) => {
            const id = setTimeout(() => {
                setMessages(prev => [...prev, msg]);
            }, index * 800); // 800ms between messages
            timeoutIds.push(id);
        });

        return () => timeoutIds.forEach(id => clearTimeout(id));
    }, []);

    const sendMessage = (text, sender) => {
        if (!text.trim()) return;
        setMessages(prev => [...prev, { text, sender }]);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && roleSelected) sendMessage(input, "user");
    };

    const handleRoleClick = (role) => {
        setRoleSelected(true);
        sendMessage(`I am ${role}`, "user");
    };

    const fileInputRef = useRef(null);
    const handleFileClick = () => fileInputRef.current?.click();

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        Array.from(files).forEach((file) => {
            const type = file.type.startsWith("image/") ? "image" : "file";
            setMessages(prev => [...prev, { sender: "user", type, file }]);
        });

        e.target.value = null;
    };


    return (
        <div className="relative w-[300px] h-[450px] sm:w-[400px] sm:h-[500px] rounded-2xl p-[2.5px] shadow-[0_0_30px_0_rgba(42,182,115,0.6)]">
            <div className="w-full h-full bg-white rounded-[calc(theme(borderRadius.2xl)-2px)] flex flex-col overflow-hidden">

                {/* Header */}
                <div className="flex justify-between items-center p-3 border-b border-gray-300">
                    <div className="flex items-center gap-2">
                        <ChevronLeft className="cursor-pointer text-black" size={18} onClick={onBack} />
                        <Image src="/assets/image/comman/chatbot-logo.svg" alt="cropgen logo" width={24} height={24} />
                        <span className="text-black text-xs font-semibold">CropGen</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <EllipsisVertical size={18} className="cursor-pointer text-black" onClick={() => setMenuOpen(!menuOpen)} />
                        <X size={16} className="cursor-pointer text-black" onClick={onClose} />
                    </div>
                </div>

                {/* Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-12 right-4 bg-white shadow-lg rounded-lg p-2 w-28 z-30">
                        <button className="flex items-center gap-2 w-full text-sm font-medium p-1 hover:bg-gray-100 transition-all ease-in-out duration-300 rounded">
                            <HistoryIcon className="text-black" size={16} /> History
                        </button>
                        <button className="flex items-center gap-2 w-full text-sm font-medium p-1 hover:bg-gray-100 transition-all ease-in-out duration-300 rounded">
                            <ArrowDownToLine size={16} /> Download
                        </button>
                    </div>
                )}

                {/* Chat Body */}
                <div className="flex-1 px-4 py-3 overflow-y-auto overflow-x-hidden flex flex-col gap-1 scrollbar-custom">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`px-3 py-2 rounded-xl text-xs max-w-[75%] ${
                                msg.sender === "user"
                                //  ? "bg-green-50 border border-green-200 self-end rounded-br-none animate-chatSlideRight"
                                    ? "bg-[#DDDEEE] border border-gray-300 self-end rounded-br-none animate-chatSlideRight"
                                    : "bg-[#DDDEEE] border border-gray-300 self-start rounded-bl-none animate-chatSlideLeft"
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
                            
                            {/* {msg.text} */}
                            {msg.text && msg.text.split("\n").map((line, i) => (
                                <p key={i} className="m-0">{line}</p>
                            ))}

                        </div>
                    ))}

                    {/* Role Buttons only after bot messages */}
                    {messages.length === initialMessages.length && !roleSelected && (
                        <div className="flex flex-col gap-1">
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-xs bg-[#E7E7F9] rounded-xl w-fit border border-gray-300 rounded-bl-none"
                                onClick={() => handleRoleClick("Farmer")}
                            >
                                <Image src="/assets/image/comman/farmer.svg" alt="Farmer" width={18} height={18} /> Farmer
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-xs bg-[#E7E7F9] rounded-xl w-fit border border-gray-300 rounded-bl-none whitespace-nowrap"
                                onClick={() => handleRoleClick("Agribusiness / AgTech Professional")}
                            >
                                <Image src="/assets/image/comman/organization.svg" alt="organization" width={18} height={18} /> Agribusiness / AgTech Professional
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-xs bg-[#E7E7F9] rounded-xl w-fit border border-gray-300 rounded-bl-none"
                                onClick={() => handleRoleClick("Just Exploring")}
                            >
                                <Image src="/assets/image/comman/earth-leaf.svg" alt="exploring" width={18} height={18} /> Just Exploring
                            </button>
                        </div>
                    )}
                </div>

                {/* Input Bar */}
                <div className="p-3">
                    <div className={`flex flex-col items-center gap-2 bg-white rounded-xl px-3 py-1.5 h-[80px] border border-gray-400 ${!roleSelected ? "opacity-50 cursor-not-allowed" : ""}`}>
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
                                <Smile color="#9A9898" size={16} className="cursor-pointer" />
                                <Image src="/assets/image/comman/chatbot-gif.svg" alt="chatbot gif" width={16} height={16} className="cursor-pointer" />
                                <Paperclip color="#9A9898" size={16} className="cursor-pointer" onClick={handleFileClick} />

                                {/* Hidden file input */}
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
                        </Link>.
                    </p>
                </div>
            </div>

        </div>
    );
}
