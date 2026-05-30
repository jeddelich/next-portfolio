"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { SiOpenai } from "react-icons/si";

import styles from "./FloatingQuickLinks.module.css";

function FloatingQuickLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

const { messages, sendMessage, status, error } = useChat({
  api: "/api/chat",
});

  // Status logging
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
        <aside className={styles.drawerPanel}>
          <div className={styles.drawerHeader}>
            <div>
              <h2 className={styles.modalTitle}>
                How can my AI Assistant help you?
              </h2>
              <p className={styles.drawerSubtitle}>
                Ask about my projects, experience, tech stack, etc.
              </p>
            </div>

            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
          </div>

          <div className={styles.messages}>
            {messages.length === 0 ? (
              <>
                <p className={styles.emptyState}>
                  Some examples of FAQ:
                </p>
                <ul className={styles.faqList}>
                  <li>&quot;Can I view your resume?&quot;</li>
                  <li>&quot;Do you have LinkedIn?&quot;</li>
                </ul>
              </>
            ) : (
              messages.map((message) => (
                <article
                  key={message.id}
                  className={`${styles.message} ${
                    message.role === "user"
                      ? styles.userMessage
                      : styles.aiMessage
                  }`}
                >
                  <p className={styles.messageRole}>
                    {message.role === "user" ? "Your Message" : "AI Assistant"}
                  </p>

                  <p className={styles.messageText}>
                    {message.parts?.map((part, index) => {
                      console.log("[part]", part);

                      if (part.type === "text") {
                        return <span key={index}>{part.text}</span>;
                      }

                      return null;
                    })}
                  </p>
                </article>
              ))
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
      ) : null}
    </>
  );
}

export default FloatingQuickLinks;