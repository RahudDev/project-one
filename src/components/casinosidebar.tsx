import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { BiArrowToTop } from "react-icons/bi";

import BitStarzLogoDark from '../assets/bitstarz-namewhite.png';
import MyStakeLogoDark from '../assets/mystake-namewhite.png';
import CloudbetLogoDark from '../assets/cloudbet-name.png';
import VaveLogoDark from '../assets/vave-name.png';
import BitslerLogoDark from '../assets/bitsler-namewhite.webp';
import BetOnlineLogoDark from '../assets/betonline-namewhite.png';
import StakePrixLogoDark from '../assets/StakePrix-namewhite.png';

import BitStarzLogoLight from '../assets/bitStarz-nameblack.png';
import MyStakeLogoLight from '../assets/mystake-nameblack.png';
import CloudbetLogoLight from '../assets/cloudbet-name.png';
import VaveLogoLight from '../assets/vave-name.png';
import BitslerLogoLight from '../assets/bitsler-nameblack.png';
import BetOnlineLogoLight from '../assets/betonline-nameblack.png';
import StakePrixLogoLight from '../assets/StakePrix-nameblack.png';

const ArrowTop = BiArrowToTop as unknown as React.FC<React.SVGProps<SVGSVGElement>>;


const CasinoSidebar = () => {
  const { t } = useTranslation();

  const games = [
    { name: "Slot Machines", icon: "🎰" },
    { name: "Roulette", icon: "🎲" },
    { name: "Blackjack", icon: "♠️" }
  ];

  const helpItems = [
    { name: "Online Casino Guide", icon: "🎯" },
    { name: "Online Casino Info & Regulations", icon: "🎮" }
  ];

   const bestCasinos = [
  { name: "BitStarz", rating: "4.3/5", badge: "Exklusiv", redirectSlug: "bitstarz", imageLight: BitStarzLogoLight, imageDark: BitStarzLogoDark },
  { name: "MyStake", rating: "4.1/5", redirectSlug: "mystake", imageLight: MyStakeLogoLight, imageDark: MyStakeLogoDark },
  { name: "Cloudbet", rating: "4.1/5", redirectSlug: "cloudbet", imageLight: CloudbetLogoLight, imageDark: CloudbetLogoDark },
  { name: "Vave", rating: "4.0/5", redirectSlug: "vave", imageLight: VaveLogoLight, imageDark: VaveLogoDark },
  { name: "Bitsler", rating: "4.0/5", redirectSlug: "bitsler", imageLight: BitslerLogoLight, imageDark: BitslerLogoDark },
  { name: "BetOnline", rating: "4.0/5", badge: "Exklusiv", redirectSlug: "betonline", imageLight: BetOnlineLogoLight, imageDark: BetOnlineLogoDark },
  { name: "StakePrix", rating: "2.3/5", redirectSlug: "stakeprix", imageLight: StakePrixLogoLight, imageDark: StakePrixLogoDark }
];



  const newCasinos = [
    { name: "TRIVELABET", bonus: "1.000€*" },
    { name: "GGSET", bonus: "1.000€*" },
    { name: "GOLD CLUB", bonus: "500€*" }
  ];

  
const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  const updateTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    setIsDarkMode(currentTheme === "dark");
  };

  // Initial check
  updateTheme();

  // Listen to changes in theme attribute
  const observer = new MutationObserver(updateTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-bs-theme"] });

  return () => observer.disconnect();
}, []);


  return (
    <div className="col-lg-4 d-none d-lg-block">
      {/* Popular Games Section */}
      <div className="border rounded mb-4">
        <div className="bg-secondary text-white p-3 rounded-top">
          <h6 className="mb-0 fw-bold text-center">Most Popular Casino Games</h6>
        </div>
        <div className="p-3">
          <ul className="list-unstyled mb-0">
            {games.map((game, idx) => (
              <li key={idx} className="d-flex align-items-center py-2 border-bottom">
                <span className="me-2">{game.icon}</span>
                <span className=" fw-medium">{game.name}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <a href="#" className="text-primary fw-medium text-decoration-none">
              More Games
            </a>
          </div>
        </div>
      </div>

      {/* Help & Info Section */}
      <div className="border rounded mb-4">
        <div className="bg-secondary text-white p-3 rounded-top">
          <h6 className="mb-0 fw-bold text-center">Help & Info</h6>
        </div>
        <div className="p-3">
          <ul className="list-unstyled mb-0">
            {helpItems.map((item, idx) => (
              <li key={idx} className="d-flex align-items-center py-2 border-bottom">
                <span className="me-2">{item.icon}</span>
                <span className=" fw-medium">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

       <div style={{ position: "sticky", top: "120px" }}>

     {/* Best Casinos Section */}
<div className="border rounded mb-4">
  <div className="bg-secondary text-white p-3 rounded-top">
    <h6 className="mb-0 fw-bold text-center">
      Best Online Casinos <span className="text-danger">July 2025</span>
    </h6>
  </div>
  <div className="p-3">
    <div className="table-responsive">
      <table className="table table-sm mb-0 table-hover">
        <tbody>
          {bestCasinos.map((casino, idx) => (
            <tr
              key={idx}
              onClick={() => (window.location.href = `/main/${casino.redirectSlug}`)}
              style={{ cursor: 'pointer' }}
              className="casino-row"
            >
              <td className="fw-bold text-muted" style={{ width: '30px' }}>
                {idx + 1}.
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "100px",   // Fixed width
                      height: "40px",   // Fixed height (smaller for wide look)
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      borderRadius: "4px" // Optional rounded corners
                    }}
                  >
                    <img
                      src={isDarkMode ? casino.imageDark : casino.imageLight}
                      alt={casino.name}
                      style={{
                        maxWidth: "90%",   // Keeps inside container
                        maxHeight: "90%",  // Keeps inside container
                        objectFit: "contain"
                      }}
                    />
                  </div>
                  {casino.badge && (
                    <span className="badge bg-primary ms-2 small">Exclusive</span>
                  )}
                </div>
              </td>
              <td className="text-end">
                <div className="d-flex align-items-center justify-content-end">
                  <span className="text-warning me-1">★</span>
                  <span className="small fw-medium">{casino.rating}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="mt-3">
      <a href="#" className="text-primary fw-medium text-decoration-none">
        All Real Money Casinos List
      </a>
    </div>
  </div>
</div>




      {/* New Casinos Section */}
      <div className="border rounded mb-4">
        <div className="bg-secondary text-white p-3 rounded-top">
          <h6 className="mb-0 fw-bold text-center">New Online Casinos</h6>
        </div>
        <div className="p-3">
          <ul className="list-unstyled mb-0">
            {newCasinos.map((casino, idx) => (
              <li key={idx} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <span className="fw-medium">
                  {idx + 1}. {casino.name}
                </span>
                <span className="text-success fw-bold">{casino.bonus}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <a href="#" className="text-primary fw-medium text-decoration-none">
              More New Online Casinos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
    <div className="border rounded">
  <div className="bg-secondary text-white p-3 rounded-top">
    <h6 className="mb-0 fw-bold d-flex align-items-center">
      <button
        className="btn w-100 d-flex align-items-center justify-content-center"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowTop color="black" fontSize="30px" className="me-2" /> TO TOP OF PAGE
      </button>
    </h6>
  </div>
</div>

      </div>
    </div>
  );
};

export default CasinoSidebar;