export default function Contact() {
  return (
    <section id="contact" className="section new-contact-wrapper">
        <div className="container">
            <div className="center-align reveal-up" style={{ marginBottom: '40px' }}>
                <h2 className="white-text" style={{ fontWeight: 600 }}>Let's Connect</h2>
                <p className="grey-text text-lighten-1" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    I'm currently exploring new opportunities inside and outside of tech.
                    Feel free to reach out—I'd love to chat.
                </p>
            </div>

            <div className="row reveal-up">
                <div className="col s12 m10 offset-m1 l8 offset-l2">
                    <div className="sleek-contact-card">
                        <div className="card-glow"></div>
                        <div className="card-content-inner">
                            <div className="contact-methods">
                                <a href="mailto:fb2407@nyu.edu" className="contact-method-link">
                                    <div className="cm-icon-wrapper"><i className="material-icons">email</i></div>
                                    <div className="cm-text">
                                        <span className="cm-title">Email</span>
                                        <span className="cm-detail">fb2407@nyu.edu</span>
                                    </div>
                                    <i className="material-icons arrow-icon">arrow_forward</i>
                                </a>

                                <a href="https://linkedin.com/in/flevin-baraka" target="_blank" rel="noreferrer"
                                    className="contact-method-link">
                                    <div className="cm-icon-wrapper"><i className="fab fa-linkedin"></i></div>
                                    <div className="cm-text">
                                        <span className="cm-title">LinkedIn</span>
                                        <span className="cm-detail">/in/flevin-baraka</span>
                                    </div>
                                    <i className="material-icons arrow-icon">arrow_forward</i>
                                </a>

                                <div className="contact-method-link static-method" style={{ cursor: 'default' }}>
                                    <div className="cm-icon-wrapper"><i className="material-icons">location_on</i></div>
                                    <div className="cm-text">
                                        <span className="cm-title">Location</span>
                                        <span className="cm-detail">Abu Dhabi</span>
                                    </div>
                                </div>
                            </div>

                            <div className="center-align" style={{ marginTop: '30px' }}>
                                <a href="contact.html" className="btn-large waves-effect waves-light full-contact-btn">
                                    <i className="material-icons left">send</i> Open Full Contact Page
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
