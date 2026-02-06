import './Hero.styles.css';
import Container from 'react-bootstrap/Container';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-heading">
        Software Engineer <br className="br-block" />
        <span id="hero-glow-text">& Problem Solver</span>
      </h1>
      <p className="hero-subtitle">
        Software Engineer specializing in Developer Experience. I build high-scale internal tools and infrastructure that eliminate technical debt and accelerate engineering velocity.
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
