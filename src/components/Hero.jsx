import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const toRotate = ["Mechanical Engineer", "Graphic Designer", "CAD Designer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, isDeleting ? 30 : 100);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="hero-content">
      <div className="container">
        <div className="row valign-wrapper" style={{ marginBottom: 0 }}>
          <div className="col s12 m8 l8">
            <h1 className="white-text reveal-up"
              style={{ fontWeight: 700, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Hi, I'm
              Flevin Baraka</h1>
            <h5 className="white-text reveal-up"
              style={{ marginTop: '20px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', fontWeight: 300 }}>
              I am a <span className="typewrite">
                <span className="wrap">{text || ' '}</span>
              </span><span className="cursor-blink"></span>
            </h5>
            <div style={{ marginTop: '40px' }} className="reveal-up">
              <div className="magnetic-wrap" style={{ display: 'inline-block' }}>
                <a href="#photos"
                  className="btn-large waves-effect waves-light indigo darken-4 rounded-btn pulse">View
                  My Work</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4 l4 center-align reveal-up hide-on-small-only">
            <div className="hero-image-wrapper">
              <img src="/images/hero-new.jpg" alt="Flevin Baraka" className="responsive-img z-depth-3 hero-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down-arrow center-align reveal-up hide-on-small-only">
        <a href="#about" className="white-text"><i className="material-icons medium">keyboard_arrow_down</i></a>
      </div>
    </div>
  );
}
