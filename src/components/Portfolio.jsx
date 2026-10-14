export default function Portfolio() {
  return (
    <section id="photos" className="section portfolio-overview">
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    <h2 className="white-text reveal-up">Portfolio Highlights</h2>
                    <p className="grey-text text-lighten-2 reveal-up">
                        A mix of engineered systems, CAD explorations, and visual design work—from a modified
                        desktop bioprinter to LEGO architecture studies and event visuals.
                    </p>
                    <p className="grey-text text-lighten-1 reveal-up">
                        This is a quick snapshot. The full portfolio page dives deeper into process, constraints,
                        and what each project taught me.
                    </p>
                    <div className="reveal-up" style={{ marginTop: '24px' }}>
                        <a href="portfolio.html"
                            className="btn waves-effect waves-light cyan lighten-1 black-text rounded-btn">View full
                            portfolio</a>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card-panel transparent glow reveal-up"
                                style={{ border: '1px solid rgba(129,140,248,0.35)' }}>
                                <h6 className="white-text">Modified mSLA Bioprinter</h6>
                                <p className="grey-text text-lighten-2" style={{ fontSize: '0.9rem' }}>
                                    Custom mounts, thermal control, and manufacturing workflow for a lab-ready
                                    desktop bioprinter.
                                </p>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="card-panel transparent glow reveal-up"
                                style={{ border: '1px solid rgba(192,132,252,0.35)' }}>
                                <h6 className="white-text">Ponte Vecchio LEGO CAD</h6>
                                <p className="grey-text text-lighten-2" style={{ fontSize: '0.9rem' }}>
                                    A digital LEGO reconstruction of Florence’s Ponte Vecchio, balancing accuracy,
                                    structure, and brick efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="col s12">
                            <div className="card-panel transparent glow reveal-up"
                                style={{ border: '1px solid rgba(34,211,238,0.35)' }}>
                                <h6 className="white-text">Visual &amp; Event Design</h6>
                                <p className="grey-text text-lighten-2" style={{ fontSize: '0.9rem' }}>
                                    Posters, event visuals, and on-site support for experiences like Abu Dhabi Art
                                    Fair and campus initiatives, keeping information clear and welcoming.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
