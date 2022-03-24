import React from 'react';

const footerIconStyle = {
  "margin": "20px 10px",
  "color": "#243E2C"
}

function Footer() {
  return (
    <footer className="white-section" id="footer">
      <div className="container-fluid">
        <a href="https://www.facebook.com/pg/Troop485/about/"><i className="social-icon fab fa-facebook-f" style={footerIconStyle}></i></a>
        <a href="mailto:boyscouts485@gmail.com"><i className="fas fa-envelope social-icon" style={footerIconStyle}></i></a>
      </div>
    </footer>
  );
}

export default Footer;
