"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { SiOpenai } from "react-icons/si";

import styles from "./FloatingQuickLinks.module.css";

function FloatingQuickLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.trim() || status !== "ready") {
      return;
    }

    const nextInput = input;
    setInput("");
    await sendMessage({ text: nextInput });
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

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
        <aside
          className={styles.drawerPanel}
          role="dialog"
          aria-modal="false"
          aria-label="AI assistant chat"
        >
          <div className={styles.drawerHeader}>
            <div>
              <h2 className={styles.modalTitle}>How can my AI Assistant help you?</h2>
              <p className={styles.drawerSubtitle}>
                Ask about my projects, experience, tech stack, etc.
              </p>
            </div>

            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close AI assistant"
              onClick={() => setIsOpen(false)}
            >
              <span aria-hidden="true">x</span>
            </button>
          </div>

          <div className={styles.messages}>
            {messages.length === 0 ? (
              <>
                <p className={styles.emptyState}>Some examples of FAQ:</p>
                <ul className={styles.faqList}>
                  <li>&quot;Can I view your resume?&quot;</li>
                  <li>&quot;Do you have LinkedIn?&quot;</li>
                </ul>
              </>
            ) : null}

            {messages.map((message) => (
              <article
                key={message.id}
                className={`${styles.message} ${message.role === "user" ? styles.userMessage : styles.aiMessage}`}
              >
                <p className={styles.messageRole}>
                  {message.role === "user" ? "You" : "AI"}
                </p>
                <p className={styles.messageText}>
                  {message.parts
                    .filter((part) => part.type === "text")
                    .map((part, index) => (
                      <span key={index}>{part.text}</span>
                    ))}
                </p>
              </article>
            ))}
          </div>

          <form className={styles.chatForm} onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
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
      ) : null}
    </>
  );
}

export default FloatingQuickLinks;