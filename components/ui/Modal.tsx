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
          I learned how to code from all{" "}
          <span className="orange">the best engineers internationally</span> as
          a part of <span className="orange">the exclusive program</span> called
          Frontend Simplified.
        </p>
        <p className="modal__para">
          As I expand <span className="orange">my expertise</span> daily in the
          languages below, I am{" "}
          <span className="orange">solving real problems</span> making a
          difference in the online world.
        </p>
        <div className="modal__languages">
          <figure className="modal__language">
            <Image
              className="modal__language--img"
              src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png"
              alt="HTML logo"
              width={100}
              height={100}
            />
            <span className="language__name">HTML</span>
          </figure>
          <figure className="modal__language">
            <Image
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/free-css-icon-svg-download-png-722685.png?f=webp"
              alt="CSS logo"
              width={100}
              height={100}
            />
            <span className="language__name">CSS</span>
          </figure>
          <figure className="modal__language">
            <Image
              className="modal__language--img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              alt="JavaScript logo"
              width={100}
              height={100}
            />
            <span className="language__name">JavaScript</span>
          </figure>
          <figure className="modal__language">
            <Image
              className="modal__language--img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png"
              alt="React logo"
              width={100}
              height={100}
            />
            <span className="language__name">React</span>
          </figure>
        </div>
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
            <input type="text" className="input" name="user_name"></input>
          </div>
          <div className="form__item form__item--row">
            <label className="form__item--label">Email:</label>
            <input type="email" className="input" name="user_email"></input>
          </div>
          <div className="form__item">
            <label className="form__item--label centered">Message:</label>
            <textarea className="input" name="message"></textarea>
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
