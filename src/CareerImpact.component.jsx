import './CareerImpact.styles.css';

const CareerImpact = () => {
  return (
    <section id="impact" className="impact-section">
      <h2 className="section-heading">Career Impact</h2>
      <div className="impact-card">
        <ul className="impact-list">
          <li className="impact-item">
            <span className="impact-metric">250 days saved/month</span>
            <p className="impact-description">
              Architected an automated support routing system using React and TypeScript, programmatically directing requests to high-priority engineering teams.
            </p>
          </li>
          <li className="impact-item">
            <span className="impact-metric">800K+ monthly active sessions</span>
            <p className="impact-description">
              Technical Architect for a developer-facing tool; authored the technical proposal and drove the project through all phases of completion.
            </p>
          </li>
          <li className="impact-item">
            <span className="impact-metric">Telemetry Infrastructure</span>
            <p className="impact-description">
              Re-engineered internal infrastructure to align with modern telemetry standards, enabling real-time metrics for data-informed engineering roadmaps.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CareerImpact;
