import './Project.styles.css';

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
        Featured Project
      </h2>
      <div className="project-card">
        <h3 className="project-title">URL Pattern Tab Manager Chrome Extension</h3>
        <p className="project-description">
          I built the URL Pattern Tab Manager to solve my own frustration with 
          dozens of messy tabs. Instead of hunting for the tabs I want —
          and sometimes closing the wrong one by mistake — I wanted Chrome
          to organize them for me. Now it can.
        </p>
        <div className="project-buttons">
          <a target="_blank" href="https://www.youtube.com/watch?v=GVgSeynEj28" className="project-button">
            Live Demo
          </a>
          <a target="_blank" href="https://github.com/FVPukay/url-pattern-tab-manager" className="project-button">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
