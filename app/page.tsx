import Image from "next/image";

export default function Home() {
  return (
    <div>
  <section id="landing-page" onMouseMove={(event) => moveBackground(event)}>
      <a href="#">
        <button className="mail__btn click" onClick={() => toggleModal()}>
          <i className="fa-solid fa-envelope"></i>
        </button>
      </a>
      <a href="#projects" className="scroll">
        <div className="scroll__icon--mouse click"></div>
        <div className="fa-solid fa-arrow-down"></div>
      </a>
      <nav>
        <figure className="personal-logo--wrapper">
          <img id="personal-logo" className="personal-logo--light" src="./assets/logo.png" alt="" />
          <img id="personal-logo" className="personal-logo--dark" src="./assets/logo dark.png" alt="" />
          <div
            className="personal-logo--effect"
            onClick={() => addProfilePicture()}
          ></div>
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link" onClick={() => toggleModal()} >
            <a
              href="#"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              >About
              </a>
          </li>
          <li className="nav__link">
            <a
              href="#projects"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              >Projects</a>
          </li>
          <li className="nav__link" onClick={() => toggleModal()}>
            <a
              href="#"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              >Contact
              </a>
          </li>
          <li className="nav__link click" onClick={() => toggleContrast()}>
            <a
              href="#"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              ><i className="fa-solid fa-circle-half-stroke">
                </i></a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <div className="header__content">
          <h1 className="title">Hey</h1>
          <h1 className="title orange">I'm Jed.</h1>
          <p className="header__para">
            I'm a <b className="orange">Frontend Software Engineer</b> with a strong
            passion for building websites that are both visually engaging and
            user-friendly.
            <br />
            Learn more <b className="orange cursor" onClick={() => toggleModal()}>about me!</b>
          </p>
        </div>
        <div className="social__list">
          <a
            href="https://www.linkedin.com/in/jed-delich/"
            target="_blank"
            className="social__link click"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/jeddelich"
            target="_blank"
            className="social__link click"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="./assets/David Bragg Resume.pdf" target="_blank" className="social__link click">
            <i className="fa-solid fa-file-pdf"></i>
          </a>
        </div>
      </header>
      <div className="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">
            Here's more about me.
          </h3>
          <h4 className="modal__subtitle modal__subtitle--about">
            Frontend Software Engineer
          </h4>
          <p className="modal__para">
            I learned how to code from all <span className="orange">the best engineers internationally</span> as a part of <span className="orange">the exclusive program</span> called Frontend Simplified.
          </p>
          <p className="modal__para">
            As I expand <span className="orange">my expertise</span> daily in the languages below, I am <span className="orange">solving real problems</span> making a difference in the online world.  
          </p>
          <div className="modal__languages">
            <figure className="modal__language">
              <Image className="modal__language--img" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png" alt="HTML logo" />
              <span className="language__name">HTML</span>
            </figure>
            <figure className="modal__language">
              <Image className="modal__language--img" src="https://cdn.iconscout.com/icon/free/png-256/free-css-icon-svg-download-png-722685.png?f=webp" alt="CSS logo" />
              <span className="language__name">CSS</span>
            </figure>
            <figure className="modal__language">
              <Image className="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript logo" />
              <span className="language__name">JavaScript</span>
            </figure>
            <figure className="modal__language">
              <Image className="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png" alt="React logo" />
              <span className="language__name">React</span>
            </figure>
          </div>
        </div>
        <div className="modal__half modal__contact">
          <i className="fa-solid fa-times modal__exit click" onClick={() => toggleModal()}></i>
          <h3 className="modal__title modal__title--contact centered">
            Let's have a chat!
          </h3>
          <h4 className="modal__subtitle modal__subtitle--contact centered">
            I'm currently open to new opportunities
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
              <textarea type="text" className="input" name="message"></textarea>
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
      <Image src="./assets/semi circle.svg" className="shape shape--0" alt="semi circle" />
      <i className="fa-solid fa-spiral shape shape--1"></i>
      <Image src="./assets/squiggly.svg" className="shape shape--2" alt="squiggly" />
      <i className="fa-solid fa-spiral shape shape--3"></i>
      <Image src="./assets/triangle.svg" className="shape shape--4" alt="triangle" />
      <i className="fa-solid fa-spiral shape shape--5"></i>
      <Image src="./assets/squiggly.svg" className="shape shape--6" alt="squiggly" />
      <i className="fa-solid fa-spiral shape shape--7"></i>
      <Image src="./assets/semi circle.svg" className="shape shape--8" alt="circle" />
    </section>

    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="orange">projects</span>
          </h1>
          <ul className="project__list">
            <li className="project">
              <div className="project__wrapper">
                <Image
                  src="./assets/treact website.png"
                  alt="Treact Website"
                  className="project__img"
                />
                <div className="project__wrapper--bg"></div>
                <div className="project__description">
                  <h3 className="project__description--title">Treact Website</h3>
                  <h4 className="project__description--subtitle">
                    Used HTML and CSS
                  </h4>
                  <p className="project__description--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi obcaecati amet, tenetur omnis rem quasi ea nam a eaque
                    consequuntur.
                  </p>
                  <div className="project__description--links">
                    <a 
                    href="https://github.com/jeddelich/treact-website" 
                    className="project__description--link"
                    target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://jeddelich.github.io/treact-website/" 
                    className="project__description--link"
                    target="_blank">
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project__wrapper">
                <Image
                  src="./assets/library website.png"
                  alt="Library Website"
                  className="project__img"
                />
                <div className="project__wrapper--bg"></div>
                <div className="project__description">
                  <h3 className="project__description--title">Library Website</h3>
                  <h4 className="project__description--subtitle">
                    Used HTML and CSS
                  </h4>
                  <p className="project__description--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi obcaecati amet, tenetur omnis rem quasi ea nam a eaque
                    consequuntur.
                  </p>
                  <div className="project__description--links">
                    <a 
                    href="https://github.com/jeddelich/e-commerce" 
                    className="project__description--link"
                    target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                    href="https://jeddelich.github.io/e-commerce/"
                    className="project__description--link"
                    target="_blank">
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure className="footer__logo--wrapper">
            <Image
              className="footer__logo--img"
              src="./assets/logo dark.png"
              alt="Logo"
            />
          </figure>
          <div className="footer__social--list">
            <a
              href="https://github.com/jeddelich"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/jed-delich/"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              onClick={() => toggleModal()}
            >
              Contact
            </a>
            <a
              href="./assets/David Bragg Resume.pdf"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">Copyright &copy; 2025 Jed Delich</div>
        </div>
      </div>
    </footer>
    </div>
  );
}
