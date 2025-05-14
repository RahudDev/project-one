import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import logo from '../assets/fottericon.png';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-dark text-light py-4 mt-5">
        <Container>
          <Row className="text-center text-md-start align-items-center">
            <Col md={4} className="mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
              <img
                src={logo}
                alt="GGL Badge"
                style={{
                  width: '160px',
                  height: 'auto',
                  borderRadius: '8px',
                  padding: '6px',
                  marginBottom: '10px',
                }}
              />
              <p>&copy; {new Date().getFullYear()} Lucky Charms Gambling. All rights reserved.</p>
              <div>
                <a href="/terms" className="text-warning text-decoration-none me-3">Terms</a>
                <a href="/privacy" className="text-warning text-decoration-none">Privacy</a>
              </div>
            </Col>

            <Col md={4} className="mb-3 mb-md-0">
              <div className="d-flex justify-content-center gap-3">
                <a href="https://www.instagram.com/luckycharmsgambling" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@luckycharmsgambling" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaYoutube />
                </a>
              </div>
            </Col>

            <Col md={4}>
              <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
                <select className="form-select form-select-sm bg-dark text-light border-secondary w-auto">
                  <option>EN</option>
                  <option>DE</option>
                  <option>FR</option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Important Notice and Legal Disclaimer */}
      <section className="d-flex py-3 px-3 bg-warning">
        <Container className="d-flex justify-content-between w-100 ">
          <Row className="w-100">
            <Col xs={12} md={6} className=" text-dark py-3 px-3">
              <p className="fw-bold mb-2">🚨 Important Notice: Gambling is for Adults Only! 🚨</p>
              <p className="mb-2">
                Gambling is only allowed for persons 18 and over (or the legal minimum age in your country). Minors are not permitted to use this website.
              </p>
              <p className="mb-2">
                ⚠️ Gambling can be addictive! Play responsibly and set personal limits. If you need help, support is available at:
              </p>
              <ul>
                <li>📌 Buwei – Federal Center for Health Education</li>
                <li>📌 BZgA – Federal Center for Health Education</li>
              </ul>
            </Col>

            <Col xs={12} md={6} className="text-dark py-3 px-3 border-start">
              <p className="fw-bold mb-2">Legal Disclaimer</p>
              <p className="mb-2">
                Online gambling is illegal or restricted in some countries. Users are responsible for complying with all local laws and age restrictions before registering at an online casino.
              </p>
              <p className="mb-2">
                The information provided on <strong>www.luckycharmsgambling.com</strong> must not be used for illegal purposes.
              </p>
              <p className="mb-0">
                This website contains affiliate links. If you make purchases through these links, I receive a commission. There are no additional costs for you.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
