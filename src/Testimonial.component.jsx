import './Testimonial.styles.css';

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-section">
      <h2 className="section-heading">What Engineers Say</h2>
      <div className="testimonial-card">
        <blockquote className="testimonial-quote">
          <p className="quote-text">
            "...extremely well organized, extremely engaged, and a great communicator... searching for solutions for problems even before involving engineers directly, a skill that will serve him well for the rest of his career."
          </p>
          <footer className="quote-attribution">
            <span className="quote-author">Software Engineer</span>
            <span className="quote-role">VS Code IDE Team</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

export default Testimonial;
