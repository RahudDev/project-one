import React, { useState } from 'react';
import { Phone, Globe, ChevronDown } from 'lucide-react';
import FooterIcon from "../assets/fottericon.png"; // Make sure your bundler supports image imports (like CRA/Vite/Webpack)

const CasinoFooter: React.FC = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  return (
    <footer className="w-100 font-sans">
      {/* Top Footer Navigation */}
     <div className="bg-dark py-3"> 
  <div className="container">
    <nav className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 gap-lg-4">
      {[
        'Impressum & Kontakt', 'Über uns', 'Wie wir bewerten', 'Karriere',
        'AGB', 'Datenschutz', 'Verantwortungsvolles Spielen',
      ].map((text, idx) => (
        <a key={idx} href="/" className="text-white text-decoration-none small">
          {text}
        </a>
      ))}
    </nav>
  </div>
</div>


      {/* Responsible Gambling Section */}
      <div className="bg-primary py-5 px-3 text-center position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-25">
          <Phone size={100} />
        </div>

        <div className="container position-relative z-2">
          <h2 className="fs-4 fw-bold mb-3">Bitte spielt verantwortungsbewusst!</h2>
          <p className="small mb-3">
            Teilnahme ab 18 Jahren. Glücksspiel kann süchtig machen. Bitte spielt verantwortungsvoll! Infos und Hilfe unter
            <a href="https://www.buwei.de/" className="ms-1 text-decoration-underline text-muted">https://www.buwei.de/</a>
          </p>

          <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
            <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
              <span className="fw-bold text-dark small">18+</span>
            </div>
            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
              <Globe size={20} className="text-muted" />
            </div>
            <div>
              <img src={FooterIcon} alt="GGL Logo" width={80} height={80} />
            </div>
          </div>

          <h3 className="h6 text-white mb-2">
            Anonyme & kostenlose BZgA-Telefonberatung zur Glücksspielsucht:
            <span className="text-warning d-block d-sm-inline"> 0800 1 37 27 00</span>
          </h3>
          <p className="text-muted small">
            Beratungszeiten: Montag bis Donnerstag: 10–22 Uhr, Freitag bis Sonntag: 10–18 Uhr
          </p>
        </div>
      </div>

      {/* Legal Information */}
      <div className="bg-gray py-5 px-3">
        <div className="container row mx-auto gy-4">
          <div className="col-md-6">
            <h3 className="fs-6 fw-bold mb-2">Glücksspielllizenzen und rechtliche Hinweise:</h3>
            <p className="small mb-2">
              Amtliche Liste der Veranstalter und Vermittler von Glücksspielen, die über eine Erlaubnis oder Konzession nach dem Glücksspielstaatsvertrag 2021 verfügen –
              <a href="https://www.gluecksspiel-behoerde.de" className="ms-1 text-primary text-decoration-underline">gluecksspiel-behoerde.de</a>
            </p>
            <div >
              <img src={FooterIcon} alt="GGL Logo"  />
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="fs-6 fw-bold mb-2">Allgemeine Geschäftsbedingungen & Promotionen</h3>
            <p className="small">
              Alle hier gelisteten Gratisangebote, Aktionen und Boni unterliegen bestimmten Bedingungen und Umsatzanforderungen
              des jeweiligen Anbieters. In den meisten Fällen sind nur Neukunden berechtigt. Die tatsächliche Höhe hängt von der
              Einzahlungsgröße ab. Bitte überprüfen Sie die Website für vollständige AGB.
            </p>
            <p className="small text-uppercase mt-2">
              Onlinecasinosdeutschland.com bietet keinerlei Kundenbetreuung für Angebote oder Aktionen auf dieser Webseite.
            </p>
          </div>
        </div>
      </div>

      {/* Social Links and Language */}
      <div className="bg-dark py-3">
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <div className="text-white fs-5 fw-bold">© 2025 Lucky Charms Gambling. All rights reserved.</div>

          <div className="d-flex align-items-center mt-2 mt-sm-0">
            <span className="me-2 small">Folgen:</span>
            <a href="/" className="text-white me-2">
              <i className="bi bi-youtube" />
            </a>
            <a href="/" className="text-white me-2">
              <i className="bi bi-instagram" />
            </a>

            <div className="position-relative">
              <button
                className="btn btn-sm btn-light d-flex align-items-center"
                onClick={toggleLanguageMenu}
                style={{ minWidth: '160px' }} // optional: ensures consistent width
              >
                <Globe size={14} className="me-1" />
                Weitere Sprachen
                <ChevronDown size={14} className="ms-1" />
              </button>

              {isLanguageMenuOpen && (
                  <div className="position-absolute end-0 bottom-100 mb-1 shadow-sm rounded-2 overflow-hidden z-3 w-100">
                  {['English', 'Français', 'Español', 'Italiano'].map((lang, index) => (
                    <a key={index} href="/" className="dropdown-item small"  style={{ minWidth: '160px' }} >
                      {lang}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CasinoFooter;
