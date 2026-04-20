const Footer = () => {
  return (
    <footer className="footer">
      <p>Built for job seekers who want a calm, focused search.</p>
      <div className="footer__links">
        <a
          href="https://github.com/Neha-Codes295"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/neha-iiitu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} JobFind. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
