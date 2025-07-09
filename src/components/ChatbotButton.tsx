// ChatbotButton.tsx
// 🔧 Planned for future version – AI chatbot feature
// This component will allow users to interact with an AI chatbot.
// The chatbot will be powered by OpenAI's API, providing users with intelligent responses to their queries.
// The component will include a button to open the chat window, a message input field, and a display area for chat history.
// The chat history will be stored in the component's state, and the bot's responses will be simulated for now.
// Once the OpenAI API integration is complete, the bot will provide real-time responses to user queries.
// This feature will enhance user engagement and provide instant support for common questions or issues.

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageSquare, X, Send } from 'lucide-react';
// import Button from './Button';

// const ChatbotButton: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
//     { sender: 'bot', text: 'Hello! How can I help you today?' },
//   ]);

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!message.trim()) return;
    
//     // Add user message to chat
//     setChatHistory([...chatHistory, { sender: 'user', text: message }]);
    
//     // Simulate bot response (this would connect to OpenAI API)
//     setTimeout(() => {
//       setChatHistory(prev => [
//         ...prev,
//         { 
//           sender: 'bot', 
//           text: "This is a placeholder response. The OpenAI API connection will be implemented later." 
//         }
//       ]);
//     }, 1000);
    
//     setMessage('');
//   };

//   return (
//     <>
//       {/* Chat Button */}
//       <motion.button
//         className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary-600 text-white shadow-lg flex items-center justify-center z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(true)}
//       >
//         <MessageSquare />
//       </motion.button>
      
//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.9 }}
//             transition={{ duration: 0.2 }}
//             className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white rounded-xl shadow-2xl z-50 flex flex-col"
//           >
//             {/* Chat Header */}
//             <div className="p-4 border-b flex items-center justify-between bg-primary-600 text-white rounded-t-xl">
//               <h3 className="font-medium">Chat Assistant</h3>
//               <button 
//                 onClick={() => setIsOpen(false)}
//                 className="text-white hover:text-gray-200 transition-colors"
//               >
//                 <X size={20} />
//               </button>
//             </div>
            
//             {/* Chat Messages */}
//             <div className="flex-1 p-4 overflow-y-auto">
//               {chatHistory.map((chat, index) => (
//                 <div
//                   key={index}
//                   className={`max-w-[80%] mb-3 p-3 rounded-lg ${
//                     chat.sender === 'user'
//                       ? 'ml-auto bg-primary-100 text-primary-800'
//                       : 'bg-gray-100 text-gray-800'
//                   }`}
//                 >
//                   {chat.text}
//                 </div>
//               ))}
//             </div>
            
//             {/* Chat Input */}
//             <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Type a message..."
//                 className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
//               />
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="!px-3"
//                 icon={<Send size={18} />}
//               />
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default ChatbotButton;