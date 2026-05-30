"use client";

import { useEffect, useState, useRef, type FormEvent } from "react";
import ReactMarkdown from "react-markdown";
import { useChat } from "@ai-sdk/react";
import { SiOpenai } from "react-icons/si";

import styles from "./FloatingQuickLinks.module.css";

function FloatingQuickLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

const {
  messages,
  sendMessage,
  status,
  error,
  reload,
  setMessages,
} = useChat({
  api: "/api/chat",
});

  // Ref for messages container
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Status logging
    // Scroll to bottom when messages change
    useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
      }
    }, [messages, isOpen]);
  useEffect(() => {
    console.log("[status]", status);
  }, [status]);

  // Raw messages logging
  useEffect(() => {
    console.log("[messages raw]", messages);

    console.log(
      "[messages pretty]",
      JSON.stringify(messages, null, 2)
    );
  }, [messages]);

  // Error logging
  useEffect(() => {
    if (error) {
      console.error("[chat error]", error);
    }
  }, [error]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.trim() || status !== "ready") {
      console.log("blocked submit", { input, status });
      return;
    }

    const nextInput = input;
    setInput("");

    console.log("[sending]", nextInput);

    await sendMessage({ text: nextInput });
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Track if session ended was shown
  const sessionEnded =
    messages.length > 0 &&
    messages[messages.length - 1]?.role === "assistant" &&
    messages[messages.length - 1]?.parts?.some(
      (part) =>
        part.type === "text" &&
        /session ended|have a great day|goodbye|bye/i.test(part.text)
    );

  // Reset chat if closed after session ended
  const handleClose = () => {
    setIsOpen(false);
    if (sessionEnded) {
      // Reset messages to empty (start fresh)
      setTimeout(() => {
        setMessages([]);
      }, 300); // Wait for close animation if any
    }
  };

  return (
    <>
      <div className={styles.fabWrap}>
        <button
          type="button"
          className={`${styles.menuShell} ${styles.menuButton} click`}
          aria-label="Open AI assistant"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <span className={styles.triggerButton} aria-hidden="true">
            <SiOpenai aria-hidden="true" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <>
          <div
            className={styles.drawerOverlay}
            aria-label="Close chat overlay"
            onClick={handleClose}
          />
          <aside className={styles.drawerPanel}>
          <div className={styles.drawerHeader}>
            <div>
              <h2 className={styles.modalTitle}>
                How can my AI assistant help you?
              </h2>
              <p className={styles.drawerSubtitle}>
                Ask about my projects, experience, tech stack, etc.
              </p>
            </div>

            <button
              type="button"
              className={styles.closeButton}
              onClick={handleClose}
            >
              x
            </button>
          </div>

          <div className={styles.messages} ref={messagesEndRef}>
            {messages.length === 0 ? (
              <>
                <p className={styles.emptyState}>
                  Some frequently asked questions:
                </p>
                <ul className={styles.faqList}>
                  <li>&quot;Can I see your resume?&quot;</li>
                  <li>&quot;What ways can we connect?&quot;</li>
                  <li>&quot;Are you currently available for work?&quot;</li>
                  <li>&quot;How much does a website cost?&quot;</li>
                </ul>
              </>
            ) : (
              <>
                {messages.map((message, idx) => {
                  // Check if this is the last message and a session end
                  const isLast = idx === messages.length - 1;
                  const isSessionEnd =
                    message.role === "assistant" &&
                    message.parts?.some(
                      (part) =>
                        part.type === "text" &&
                        /session ended|have a great day|goodbye|bye/i.test(part.text)
                    );
                  if (isLast && isSessionEnd) {
                    // Don't render as a normal message bubble
                    return null;
                  }
                  return (
                    <article
                      key={message.id}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: message.role === 'user' ? 'flex-end' : 'flex-start' }}
                    >
                      <span className={styles.messageRolePill}>
                        {message.role === "user" ? "You" : "AI assistant"}
                      </span>
                      <div className={`${styles.message} ${
                        message.role === "user"
                          ? styles.userMessage
                          : styles.aiMessage
                      }`}>
                        <p className={styles.messageText}>
                          {message.parts?.map((part, index) => {
                            if (part.type === "text") {
                              if (message.role === "assistant") {
                                return (
                                  <ReactMarkdown key={index} components={{ a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" /> }}>
                                    {part.text}
                                  </ReactMarkdown>
                                );
                              }
                              return <span key={index}>{part.text}</span>;
                            }
                            return null;
                          })}
                        </p>
                      </div>
                    </article>
                  );
                })}
                {/* Show session ended at the bottom if last message is a session end */}
                {(() => {
                  const last = messages[messages.length - 1];
                  if (
                    last?.role === "assistant" &&
                    last.parts?.some(
                      (part) =>
                        part.type === "text" &&
                        /session ended|have a great day|goodbye|bye/i.test(part.text)
                    )
                  ) {
                    return (
                      <div className={styles.sessionEnded}>
                        Session ended
                      </div>
                    );
                  }
                  return null;
                })()}
              </>
            )}
          </div>

          <form className={styles.chatForm} onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Jed's work..."
              className={styles.chatInput}
            />

            <button
              type="submit"
              className={styles.sendButton}
              disabled={status === "streaming"}
            >
              {status === "streaming" ? "..." : "Send"}
            </button>
          </form>
        </aside>
        </>
      ) : null}
    </>
  );
}

export default FloatingQuickLinks;