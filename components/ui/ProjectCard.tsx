import Image from "next/image";

function ProjectCard() {
  return (
    <li className="project">
      <div className="project__wrapper">
        <Image
          src="/treact website.png"
          alt="Treact Website"
          className="project__img"
          width={900}
          height={480}
        />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">Treact Website</h3>
          <h4 className="project__description--subtitle">Used HTML and CSS</h4>
          <p className="project__description--para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            obcaecati amet, tenetur omnis rem quasi ea nam a eaque consequuntur.
          </p>
          <div className="project__description--links">
            <a
              href="https://github.com/jeddelich/treact-website"
              className="project__description--link"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://jeddelich.github.io/treact-website/"
              className="project__description--link"
              target="_blank"
            >
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
