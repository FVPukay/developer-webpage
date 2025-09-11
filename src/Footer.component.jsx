import './Footer.styles.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} Frederick Pukay — All Rights Reserved
        </p>
      </footer>
  )
}

export default Footer;
