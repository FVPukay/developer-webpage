import './Approach.styles.css';

const Approach = () => {
  return (
    <section id="approach" className="approach-section">
      <h2 className="section-heading">My Approach</h2>
      <div className="approach-card">
        <p className="approach-text">
          It's all about users.
        </p>
        <p className="approach-text">
          How does the software I am designing and writing make the experience better for my product's end-users?  Engineering for the sake of engineering is not engineering.  Building software that delights users is.
        </p>
        <p className="approach-text">
          As a <span className="bold-text">Backend AI Engineer</span>, I develop software wholistically
          thinking about the entire system, not just the happy path, but the various edge cases, the pros and cons
          between approaches, because it's rare when there is a clear-cut winner.
        </p>
        <p className="approach-text">
          I specialize in productivity and developer tooling, where my <span className="bold-text">JavaScript, TypeScript, and React</span> expertise allows me to build solutions that scale.
        </p>
        <p className="approach-text">
          <span className="bold-text">I leverage AI aggressively while staying accountable for the software developed </span>
          and I focus on code quality which isn't static but varies from one company, repo, or situation to another.
        </p>
      </div>
    </section>
  );
}

export default Approach;
