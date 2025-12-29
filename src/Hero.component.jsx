import './Hero.styles.css';
import Container from 'react-bootstrap/Container';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-heading">
        Backend Support Engineer <br className="br-block" />
        <span id="hero-glow-text">& Problem Solver</span>
      </h1>
      <p className="hero-subtitle">
        I bridge the gap between engineering and users, debug complex
        infrastructure issues, and deliver solutions with <span className="bold-text">JavaScript, TypeScript, React, Node.js, and Python</span>.
      </p>
      <Container className="d-flex justify-content-center">
      <a href="#projects" className="cta-button">
        View My Work
      </a>
      </Container>
    </section>
  );
}

export default Hero;
