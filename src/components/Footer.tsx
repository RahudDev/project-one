import React, { useState, useEffect } from 'react';
import { Phone, Globe } from 'lucide-react';
import FooterIcon from '../assets/fottericon.png';
import { useTranslation } from 'react-i18next';
import de_flag from './assets/german_flag.jpg';
import en_flag from './assets/uk_flag.jpg';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Instagram = FaInstagram as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const Youtube = FaYoutube as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const languageOptions: { [key: string]: string } = {
  en: en_flag,
  de: de_flag,
};

const CasinoFooter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('de');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'de';
    setSelectedLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <footer className="w-100 font-sans">
      {/* Top Nav Links */}
      <div className="bg-dark py-3">
        <div className="container">
          <nav className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 gap-lg-4">
            {(t('footer.nav', { returnObjects: true }) as string[]).map((item, idx) => (
              <a key={idx} href="/" className="text-white text-decoration-none small">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Responsible Gambling */}
      <div className="bg-primary py-5 px-3 text-center position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-25">
          <Phone size={100} />
        </div>
        <div className="container position-relative z-2">
          <h2 className="fs-4 fw-bold mb-3">{t('footer.title')}</h2>
          <p className="small mb-3">
            {t('footer.desc')}
            <a href="https://www.buwei.de/" className="ms-1 text-decoration-underline text-muted">https://www.buwei.de/</a>
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
            <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
              <span className="fw-bold text-dark small">18+</span>
            </div>
            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
              <Globe size={20} className="text-muted" />
            </div>
            <img src={FooterIcon} alt="GGL Logo" width={80} height={80} />
          </div>
          <h3 className="h6 text-white mb-2">
            {t('footer.phoneHelp')}
            <span className="text-warning d-block d-sm-inline"> 0800 1 37 27 00</span>
          </h3>
          <p className="text-muted small">{t('footer.phoneHours')}</p>
        </div>
      </div>

      {/* License & Terms */}
      <div className="bg-gray py-5 px-3">
        <div className="container row mx-auto gy-4">
          <div className="col-md-6">
            <h3 className="fs-6 fw-bold mb-2">{t('footer.licensesTitle')}</h3>
            <p className="small mb-2">
              {t('footer.licensesDesc')}
              <a href="https://www.gluecksspiel-behoerde.de" className="ms-1 text-primary text-decoration-underline">
                gluecksspiel-behoerde.de
              </a>
            </p>
            <img src={FooterIcon} alt="GGL Logo" />
          </div>
          <div className="col-md-6">
            <h3 className="fs-6 fw-bold mb-2">{t('footer.termsTitle')}</h3>
            <p className="small">{t('footer.termsDesc1')}</p>
            <p className="small text-uppercase mt-2">{t('footer.termsDesc2')}</p>
          </div>
        </div>
      </div>

      {/* Social Media and Language */}
      <div className="bg-dark py-3">
        <div className="container  text-white d-flex flex-column flex-sm-row justify-content-between align-items-center">
          {/* Social Icons */}
          <ul className="app-links">
            <li>
              <a href="https://www.instagram.com/luckycharmsgambling" className="app-link">
                <Instagram className="icon_media" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@luckycharmsgambling" className="app-link">
                <Youtube className="icon_media" />
              </a>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-white fs-5 fw-bold">{t('footer.rights')}</div>

          {/* Language Selector */}
          <div className="d-flex align-items-center mt-2 mt-sm-0">
            <div className="language position-relative">
              <img src={languageOptions[selectedLanguage]} alt={selectedLanguage} />
              <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CasinoFooter;
