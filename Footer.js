// Footer.js
import React from "react";
import { Container } from "react-bootstrap";
import { FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-white mt-4 py-3" style={{ position: "relative", bottom: 0, width: "100%", backgroundColor: '#0e5f12' }}>
      <Container>
        <div className="d-flex justify-content-center">
          <a href="https://www.youtube.com/" className="text-white me-3">
            <FaYoutube size={32} />
          </a>
          <a href="https://www.spotify.com/" className="text-white me-3">
            <FaSpotify size={32} />
          </a>
          <a href="https://www.facebook.com/" className="text-white">
            <FaFacebook size={32} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
