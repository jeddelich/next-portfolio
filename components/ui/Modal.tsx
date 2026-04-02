"use client";

import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";

function Modal() {
  const { toggleModal } = useModal();

  const contact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">
          Here&apos;s more about me.
        </h3>
        <h4 className="modal__subtitle modal__subtitle--about">
          Frontend Software Engineer
        </h4>
        <p className="modal__para">
          Initially pursuing a career in counseling, I threw my passion for
          people and <span className="orange">problem-solving</span> into
          frontend development. Having traveled to over 35+ different countries,
          I know how to{" "}
          <span className="orange">
            collaborate, communicate, and face challenges from a different
            perspective.
          </span>
        </p>
        <p className="modal__para">
          I am sure by now you have seen some of
          <span className="orange"> my tech stack</span> floating around, and{" "}
          <span className="orange">my personal projects</span> below, but feel
          free to check out my resume for more, including{" "}
          <span className="orange">my internship experience!</span> I would love
          to connect more about how I could bring value to your team!
        </p>
      </div>
      <div className="modal__half modal__contact">
        <i
          className="fa-solid fa-times modal__exit click"
          onClick={() => toggleModal()}
        ></i>
        <h3 className="modal__title modal__title--contact centered">
          Let&apos;s have a chat!
        </h3>
        <h4 className="modal__subtitle modal__subtitle--contact centered">
          I&apos;m currently open to new opportunities
        </h4>
        <form onSubmit={(event) => contact(event)} id="contact__form">
          <div className="form__item form__item--row">
            <label className="form__item--label">Name:</label>
            <input
              type="text"
              className="input"
              name="user_name"
              required
            ></input>
          </div>
          <div className="form__item form__item--row">
            <label className="form__item--label">Email:</label>
            <input
              type="email"
              className="input"
              name="user_email"
              required
            ></input>
          </div>
          <div className="form__item">
            <label className="form__item--label centered">Message:</label>
            <textarea className="input" name="message" required></textarea>
          </div>
          <div className="form__submit--wrapper">
            <button id="contact__submit" className="form__submit">
              Send it my way
            </button>
          </div>
        </form>
        <div className="modal__overlay modal__overlay--loading">
          <i className="fa-solid fa-spinner"></i>
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message!
          <br />
          Looking forward to speaking to you soon.
        </div>
      </div>
    </div>
  );
}

export default Modal;
