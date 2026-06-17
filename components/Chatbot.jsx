"use client";

import { Bot, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";

const smartReplies = {
  "Home cleaning":
    "For luxury home cleaning, we can arrange weekly, fortnightly, or one-off visits with hotel-level finishing touches.",
  "Office cleaning":
    "For office cleaning, Aurelia can schedule discreet early-morning or evening teams for workspaces across London.",
  "Airbnb cleaning":
    "For Airbnb turnovers, we focus on linen resets, guest-ready presentation, kitchen checks, and fast turnaround windows.",
  "Deep cleaning":
    "For deep cleaning, we recommend a room-by-room reset covering appliances, skirting, fixtures, glass, and high-touch areas.",
  "Get quote":
    "I can help with that. Share your property size, service type, and preferred date in the booking form for a tailored quote."
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Good evening. I am the Aurelia AI Cleaning Assistant. What would you like to prepare today?"
    }
  ]);
  const [input, setInput] = useState("");

  function addMockReply(label) {
    const nextMessage = smartReplies[label] ?? "Aurelia can tailor a cleaning plan around your property, schedule, and finish level.";
    setMessages((current) => [
      ...current,
      { role: "user", text: label },
      { role: "assistant", text: nextMessage }
    ]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const value = input.trim();
    if (!value) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: value },
      {
        role: "assistant",
        text: "Thanks. For now this is a mock assistant, but Aurelia would use these details to prepare a cleaning recommendation."
      }
    ]);
    setInput("");

    // Connect a real AI API here later, for example by sending the message history
    // to an authenticated Next.js route that calls your chosen AI provider.
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {open ? (
        <div className="mb-4 w-[min(calc(100vw-2.5rem),390px)] overflow-hidden rounded-[8px] border border-champagne/25 bg-night shadow-aurelia">
          <div className="flex items-center justify-between border-b border-champagne/15 bg-charcoal px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-[8px] bg-champagne text-night">
                <Bot size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ivory">Aurelia AI Cleaning Assistant</p>
                <p className="text-xs text-smoke">Mock smart replies</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chatbot"
              className="grid size-9 place-items-center rounded-[8px] text-smoke transition hover:bg-champagne/10 hover:text-ivory"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-[8px] px-3 py-2 text-sm leading-6 ${
                  message.role === "assistant"
                    ? "mr-8 border border-champagne/15 bg-charcoal text-pearl"
                    : "ml-8 bg-champagne text-night"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-champagne/15 px-4 py-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {Object.keys(smartReplies).map((label) => (
                <button
                  key={label}
                  type="button"
                  className="rounded-[8px] border border-champagne/20 px-3 py-2 text-xs text-pearl transition hover:border-champagne hover:text-champagne"
                  onClick={() => addMockReply(label)}
                >
                  {label}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="luxury-input min-w-0 flex-1 py-3 text-sm"
                placeholder="Ask about a service"
                aria-label="Chat message"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="grid size-12 shrink-0 place-items-center rounded-[8px] bg-champagne text-night transition hover:bg-ivory"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className="group flex items-center gap-3 rounded-[8px] border border-champagne/35 bg-champagne px-4 py-3 text-sm font-semibold text-night shadow-gold transition hover:bg-ivory"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close Aurelia AI chat" : "Open Aurelia AI chat"}
      >
        <Sparkles size={18} />
        <span className="hidden sm:inline">Ask Aurelia AI</span>
      </button>
    </div>
  );
}
