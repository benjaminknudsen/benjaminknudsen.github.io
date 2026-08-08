function ContactPage() {
  return (
    <div className="page contact-page">
      <section className="contact-hero">
        <div className="contact-copy">
          <h1>Lad os tage en snak.</h1>
          <p className="lead">
            <em>
              Har du en mulighed, hvor mine kompetencer kunne være et godt
              match, ser jeg meget gerne frem til at høre fra dig.
            </em>
          </p>
        </div>

        <div className="contact-portrait">
          <img src="/bkbillede123.jpeg" alt="Portræt af Benjamin Knudsen" />
        </div>
      </section>

      <section className="contact-lines" aria-label="Kontaktmuligheder">
        <a href="mailto:benjaminskovknudsen@hotmail.com">
          <span className="contact-type">Mail</span>
          <strong>benjaminskovknudsen@hotmail.com</strong>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        <a href="tel:+4593922880">
          <span className="contact-type">Telefon</span>
          <strong>93 92 28 80</strong>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}

export default ContactPage;
