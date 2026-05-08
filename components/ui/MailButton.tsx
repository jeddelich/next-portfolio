type MailButtonProps = {
  heroStyles?: string;
};

function MailButton({ heroStyles }: MailButtonProps) {
  return (
    <a
      href="#contact"
      className={`${heroStyles ?? ""} click`}
      aria-label="Go to contact section"
    >
      <i className="fa-solid fa-envelope"></i>
    </a>
  );
}

export default MailButton;
