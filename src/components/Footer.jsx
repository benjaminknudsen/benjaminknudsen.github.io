function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-name">
          <span>Benjamin Knudsen</span>
          <small>Portfolio</small>
        </div>

        <div className="footer-links" aria-label="Kontaktoplysninger">
          <a href="mailto:benjaminskovknudsen@hotmail.com">
            benjaminskovknudsen@hotmail.com
          </a>
          <a href="tel:+4593922880">93 92 28 80</a>
          <a
            href="https://www.linkedin.com/in/benjamin-knudsen-84b472403/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
