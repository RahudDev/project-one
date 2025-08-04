import React from 'react';
import './LanguageSelector.css';
import { useTranslation } from 'react-i18next';



export const languages = [
  { name: 'English', code: 'en', flag: 'gb' },
  { name: 'Hebrew', code: 'he', flag: 'il' },
  { name: 'Arabic', code: 'ar', flag: 'sa' },
  { name: 'Russian', code: 'ru', flag: 'ru' },
  { name: 'German', code: 'de', flag: 'de' },
  { name: 'Chinese', code: 'zh', flag: 'cn' }
];




export default function LanguageSelector({ onClose, onSelect }) {
const { t } = useTranslation();
  return (
    <div className="lang-overlay">
      <div className="lang-modal">
        <div className="lang-header">
          <h4>{t('languageSelector.title')}</h4>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="lang-grid">
          {languages.map((lang) => (
            <div key={lang.code} className="lang-card" onClick={() => onSelect(lang)}>
              <span className="lang-flag"> <img
        src={`https://flagcdn.com/24x18/${lang.flag}.png`}
        alt={lang.name}
      /></span>
              <span className="lang-name">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
