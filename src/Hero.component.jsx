import './Hero.styles.css';
import Container from 'react-bootstrap/Container';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-heading">
        Full Stack Developer <br className="br-block" />
        <span id="hero-glow-text">& Prototyper</span>
      </h1>
      <p className="hero-subtitle">
        I rapidly build prototypes with JavaScript and React —
        shipping products early to customers.
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
