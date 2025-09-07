"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

function FloatingBtnInner() {
  const [showChat, setShowChat] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMessage = { from: "user", text: chatInput };
    setChatHistory((prev) => [...prev, newMessage]);

    const phoneRegex = /\b(\+91[-\s]?)?[6-9]\d{9}\b/;
    const botReply = phoneRegex.test(chatInput)
      ? "Thanks for giving your contact number. We will get back to you shortly."
      : "Thanks for choosing us. Please call us at +91 8887704962 or drop your number, we will contact you.";

    setTimeout(() => {
      setChatHistory((prev) => [...prev, { from: "bot", text: botReply }]);
    }, 1000);

    setChatInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-3">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/pictureperfectstudio27/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <FaInstagram size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917905746104"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Call */}
      <a
        href="tel:+917905746104"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FaPhone size={20} />
      </a>
    </div>
  );
}

export default function FloatingBtn() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(<FloatingBtnInner />, document.body);
}
