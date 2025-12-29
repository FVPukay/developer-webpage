import './Project.styles.css';

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
        Featured Projects
      </h2>
      <div className="project-card">
        <h3 className="project-title">URL Pattern Tab Manager Chrome Extension</h3>
        <p className="project-description">
          A Chrome extension that demonstrates deep <span className="bold-text">API integration</span> and <span className="bold-text">JavaScript pattern matching</span>.
        </p>
        <p className="project-description">
          Solves automatic tab organization through flexible URL patterns (wildcards, domains, paths),
          integrating seamlessly with Chrome's native tab groups.
        </p>
        <p className="project-description">
          Published to Chrome Web Store with 100% local storage for privacy.
        </p>
        <div className="project-buttons">
          <a target="_blank" href="https://www.youtube.com/watch?v=GVgSeynEj28" className="project-button">
            Live Demo
          </a>
          <a target="_blank" href="https://github.com/FVPukay/url-pattern-tab-manager" className="project-button">
            GitHub
          </a>
          <a target="_blank" href="https://chromewebstore.google.com/detail/url-pattern-tab-manager/mfgcfcghkejdcgdfgeggjkojhlfdclnj" className="project-button">
            Chrome Store
          </a>
        </div>
      </div>
      <div className="project-card">
        <h3 className="project-title">Pomodoro Timer & Task Tracker</h3>
        <p className="project-description">
          Currently prototyping a productivity application built with <span className="bold-text">Next.js, React, TypeScript, and Tailwind CSS</span>.
        </p>
        <p className="project-description">
          Features a polished Pomodoro timer, hierarchical task management with subtasks, and
          an integrated priority matrix.
        </p>
        <p className="project-description">
          Demonstrates modern <span className="bold-text">React patterns, TypeScript type safety, component architecture</span>, and <span className="bold-text"> building developer tools that solve real workflow challenges</span>.
        </p>
      </div>
    </section>
  );
}

export default Project;
