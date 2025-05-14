import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Info,
  Shield,
  Moon,
  Sun
} from 'lucide-react';
import headericon from "../assets/headericon.jpeg";

type DropdownType = string | null;

const CasinoHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-bs-theme', initialTheme); // Bootstrap-specific
  setTheme(initialTheme);
  setMounted(true);
}, []);


  const toggleTheme = () => {
  const newTheme: 'light' | 'dark' = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', newTheme); // Bootstrap-specific
  localStorage.setItem('theme', newTheme);
  setTheme(newTheme);
};


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: DropdownType) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const ThemeToggle: React.FC = () => {
    if (!mounted) return <div className="w-6 h-6" />;
    return (
      <button
        onClick={toggleTheme}
        className="p-1 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <Moon size={16} className="text-white" />
        ) : (
          <Sun size={16} className="text-yellow-300" />
        )}
      </button>
    );
  };

  return (
    <div className="w-full font-sans" >
      {/* Top bar */}
      <div className="bg-dark  d-flex justify-content-end align-items-center py-2 px-4 gap-3">
        <div className="d-flex text-white align-items-center">
          <Info size={16} className="me-1" />
          <span className="small">Werbehinweise</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="h-6 w-6 bg-secondary text-white rounded d-flex align-items-center justify-content-center">
            <Shield size={14} />
          </div>
          <div className="h-6 w-6 bg-secondary text-white rounded d-flex align-items-center justify-content-center">
            <span className="text-xs fw-bold">18+</span>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main nav */}
      <nav className=" dark:bg-dark py-3 px-4 shadow" >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center gap-2">
            <img
              src={headericon}
              alt="web icon"
              width={40}
              height={40}
                className="rounded-circle border border-white border-2"
            />
            <span className="fw-bold fs-5 dark:text-white">
              Lucky Charms Gambling
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="d-none d-md-flex align-items-center gap-4">
            <a href="/" className="fw-medium btn dark:text-light hover:text-danger">Beste Online Casinos</a>

            {/* Bonus Dropdown */}
            <div className="position-relative">
              <button className="btn  dark:text-light p-0 d-flex align-items-center gap-1"
                onClick={() => toggleDropdown('bonus')}
              >
                Bonus <ChevronDown size={16} />
              </button>
              {activeDropdown === 'bonus' && (
                <div className="dropdown-menu show mt-2 shadow-sm rounded-2 dark:bg-secondary">
                  <a href="/" className="dropdown-item">Willkommensbonus</a>
                  <a href="/" className="dropdown-item">Freispiele</a>
                  <a href="/" className="dropdown-item">Reload Bonus</a>
                </div>
              )}
            </div>

            {/* Spiele Dropdown */}
            <div className="position-relative">
              <button className="btn   dark:text-light p-0 d-flex align-items-center gap-1"
                onClick={() => toggleDropdown('spiele')}
              >
                Spiele <ChevronDown size={16} />
              </button>
              {activeDropdown === 'spiele' && (
                <div className="dropdown-menu show mt-2 shadow-sm rounded-2  dark:bg-secondary">
                  <a href="/" className="dropdown-item">Slots</a>
                  <a href="/" className="dropdown-item">Tischspiele</a>
                  <a href="/" className="dropdown-item">Live Casino</a>
                </div>
              )}
            </div>

            {/* Zahlungsmethoden Dropdown */}
            <div className="position-relative">
              <button className="btn   dark:text-light p-0 d-flex align-items-center gap-1"
                onClick={() => toggleDropdown('zahlungsmethoden')}
              >
                Zahlungsmethoden <ChevronDown size={16} />
              </button>
              {activeDropdown === 'zahlungsmethoden' && (
                <div className="dropdown-menu show mt-2 shadow-sm rounded-2  dark:bg-secondary">
                  <a href="/" className="dropdown-item">PayPal</a>
                  <a href="/" className="dropdown-item">Kreditkarte</a>
                  <a href="/" className="dropdown-item">Überweisung</a>
                </div>
              )}
            </div>

            <a href="/" className="fw-medium btn dark:text-light hover:text-danger">News</a>
          </div>

          {/* Mobile menu toggle */}
          <button className="d-md-none btn dark:text-light" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="d-md-none mt-3">
            <a href="/" className="d-block py-2 px-3  dark:text-light">Beste Online Casinos</a>

            {/* Mobile Dropdowns */}
            {['bonus', 'spiele'].map((menu) => (
              <div key={menu}>
                <button
                  className="btn btn-link w-100 text-start d-flex justify-content-between align-items-center py-2 px-3 text-dark dark:text-light"
                  onClick={() => toggleDropdown(`mobile-${menu}`)}
                >
                  <span>{menu.charAt(0).toUpperCase() + menu.slice(1)}</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === `mobile-${menu}` && (
                  <div className="bg-light dark:bg-secondary px-3 py-2">
                    <a href="/" className="d-block py-1 px-3 text-dark dark:text-light">Option 1</a>
                    <a href="/" className="d-block py-1 px-3 text-dark dark:text-light">Option 2</a>
                    <a href="/" className="d-block py-1 px-3 text-dark dark:text-light">Option 3</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default CasinoHeader;
