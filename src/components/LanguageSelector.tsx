import React from 'react';
import './LanguageSelector.css';
import { useTranslation } from 'react-i18next';



export const languages = [
  { name: 'English', code: 'en', flag: '🇬🇧' },
  { name: 'Hebrew', code: 'he', flag: '🇮🇱' },
  { name: 'Arabic', code: 'ar', flag: '🇸🇦' },
  { name: 'Russian', code: 'ru', flag: '🇷🇺' },
  { name: 'German', code: 'de', flag: '🇩🇪' },
  { name: 'Chinese', code: 'zh', flag: '🇨🇳' }
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
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
