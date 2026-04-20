"use client";

import { useRef, useState } from "react";
import { useModal } from "@/contexts/ModalContext";
import styles from "./Modal.module.css";

function Modal() {
  const { toggleModal } = useModal();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const EMAILJS_SERVICE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ojz7iuk";
  const EMAILJS_TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_oyden5m";
  const EMAILJS_PUBLIC_KEY =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "R54J9NMfhG7qiMJoB";

  const contact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    setEmailStatus("loading");

    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setEmailStatus("success");
      formRef.current.reset();
    } catch {
      setEmailStatus("error");
    }
  };

  return (
    <div className={styles.modal}>
      <div className={`${styles.modal__half} ${styles.modal__about}`}>
        <i
          className={`fa-solid fa-times ${styles.modal__exit} ${styles.modal__exitAbout} click`}
          onClick={() => toggleModal()}
        ></i>
        <h3 className={styles.modal__title}>
          Here&apos;s more about me.
        </h3>
        <h4 className={styles.modal__subtitle}>
          Frontend Software Engineer
        </h4>
        <p className={styles.modal__para}>
          Initially pursuing a career in counseling, I threw my passion for
          people and <span className="orange">problem-solving</span> into
          frontend development. Having traveled to over 35+ different countries,
          I know how to{" "}
          <span className="orange">
            learn, communicate, and face challenges from different
            perspectives.
          </span>
        </p>
        <p className={`${styles.modal__para} ${styles.modal__paraSecondary}`}>
          I am sure by now you have seen some of
          <span className="orange"> my tech stack</span> floating around, and{" "}
          <span className="orange">my personal projects</span> below, but feel
          free to check out my resume for more, including{" "}
          <span className="orange">my internship experience!</span> I would love
          to connect more about how I could bring value to your team!
        </p>
      </div>
      <div className={`${styles.modal__half} ${styles.modal__contact}`}>
        <i
          className={`fa-solid fa-times ${styles.modal__exit} ${styles.modal__exitContact} click`}
          onClick={() => toggleModal()}
        ></i>
        <h3 className={`${styles.modal__title} ${styles.centered}`}>
          Let&apos;s have a chat!
        </h3>
        <h4 className={`${styles.modal__subtitle} ${styles.centered}`}>
          I&apos;m currently open to new opportunities
        </h4>
        <form ref={formRef} onSubmit={(event) => contact(event)} id="contact__form">
          <div className={`${styles.form__item} ${styles.form__itemRow}`}>
            <label className="form__item--label">Name:</label>
            <input
              type="text"
              className="input"
              name="user_name"
              required
            ></input>
          </div>
          <div className={`${styles.form__item} ${styles.form__itemRow}`}>
            <label className="form__item--label">Email:</label>
            <input
              type="email"
              className="input"
              name="user_email"
              required
            ></input>
          </div>
          <div className={styles.form__item}>
            <label className={`form__item--label ${styles.centered}`}>Message:</label>
            <textarea className="input" name="message" required></textarea>
          </div>
          <div className={styles.form__submitWrapper}>
            <button
              id="contact__submit"
              className={styles.form__submit}
              disabled={emailStatus === "loading"}
            >
              {emailStatus === "loading" ? "Sending..." : "Send it my way"}
            </button>
          </div>
        </form>
        <div
          className={`${styles.modal__overlay} ${styles.modal__overlayLoading} ${
            emailStatus === "loading" ? styles.modal__overlayVisible : ""
          }`}
        >
          <i className="fa-solid fa-spinner"></i>
        </div>
        <div
          className={`${styles.modal__overlay} ${styles.modal__overlaySuccess} ${
            emailStatus === "success" || emailStatus === "error"
              ? styles.modal__overlayVisible
              : ""
          }`}
          style={emailStatus === "error" ? { backgroundColor: "#a43f3f" } : {}}
        >
          {emailStatus === "success" ? (
            <>
              Thanks for the message!
              <br />
              Looking forward to speaking to you soon.
            </>
          ) : (
            "Something went wrong. Please try again."
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
