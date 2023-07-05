import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Discover</h4>
          <ul>
            <li>Editor's Choice</li>
            <li>Curated Collections</li>
            <li>Popular Images</li>
            <li>Popular Videos</li>
            <li>Popular Music</li>
            <li>Popular Searches</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>Blog</li>
            <li>Forum</li>
            <li>Creators</li>
            <li>Cameras</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>License Summary</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>API</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Picture Lens. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
