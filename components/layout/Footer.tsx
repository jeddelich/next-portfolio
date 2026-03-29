import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure className="footer__logo--wrapper">
            <Image
              className="footer__logo--img"
              src="/logo dark.png"
              alt="Logo"
              width={70}
              height={70}
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
              href="/David Bragg Resume.pdf"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2025 Jed Delich
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
