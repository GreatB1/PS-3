export default function Navbar() {
  return (
    <nav className="nav-wrapper transparent z-depth-0">
        <div className="container">
            <a href="#home" className="brand-logo left">
                <img src="/images/Home_icon.png" alt="Flevin Baraka" style={{ height: '45px', marginTop: '15px' }} />
            </a>
            <a href="#" className="sidenav-trigger right" data-target="mobile-menu">
                <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down" style={{ fontWeight: 500 }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#photos">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="sidenav grey darken-4" id="mobile-menu">
                <li><a href="#home" className="white-text">Home</a></li>
                <li><a href="#about" className="white-text">About</a></li>
                <li><a href="#photos" className="white-text">Portfolio</a></li>
                <li><a href="#contact" className="white-text">Contact</a></li>
            </ul>
        </div>
    </nav>
  );
}
