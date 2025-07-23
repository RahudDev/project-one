import React from "react";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react"; // Star icon
import CasinoHeader from "../components/Header";
import CasinoFooter from "../components/Footer";
import CasinoSidebar from "../components/casinosidebar";
import UserReviews from "../components/userReviews";
import FAQ from "../components/faq";
import trustpilotLogoLight from "../assets/trustpilot-white.png"; // or use CDN
import './Home.css';
import { casinosData } from "./CasinoData";

const ratings: { [key: number]: number } = {
  1: 4.3, // BitStarz
  2: 4.1, // MyStake
  3: 4.1, // Cloudbet
  4: 4.1, // Nokyc
  5: 4.0, // Vave
  6: 4.0, // Bitsler
  7: 4.0, // BetOnline.ag
  8: 4.0, // TG Casino
  9: 3.6, // Fastslots
  10: 2.3, // StakePrix
};



const trustpilotLinks: { [key: number]: string } = {
  1: "https://www.trustpilot.com/review/bitstarz.com",      // BitStarz
  2: "https://www.trustpilot.com/review/mystake.com",       // MyStake
  3: "https://www.trustpilot.com/review/cloudbet.com",      // Cloudbet
  4: "https://www.trustpilot.com/review/nokyccasinos.uk",         // Nokyc (assumed domain)
  5: "https://www.trustpilot.com/review/vave.com",          // Vave
  6: "https://www.trustpilot.com/review/bitsler.com",       // Bitsler
  7: "https://www.trustpilot.com/review/betonline.ag",      // BetOnline
  8: "https://www.trustpilot.com/review/tg.casino",      // TG Casino (assumed domain)
  9: "https://www.trustpilot.com/review/fastslots.com",     // Fastslots (assumed domain)
  10: "https://www.trustpilot.com/review/stakeprix.com",    // StakePrix
};





export default function CasinoPage() {
  const { t } = useTranslation();
  const games = t("home.sidebar.games", { returnObjects: true }) as string[];
  const helpItems = t("home.sidebar.helpItems", { returnObjects: true }) as string[];

  const casinos = casinosData.map(casino => ({
    ...casino,
    displayName: `${casino.id}. ${casino.name}`,
    title_bonus: t(`home.casinos.${casino.id}.title_bonus`),
    bonus: t(`home.casinos.${casino.id}.bonus`),
    details: t(`home.casinos.${casino.id}.details`),
    payout: "", // Optional
    textbuton: t(`home.casinos.${casino.id}.textbuton`),
    buttonText: t(`home.casinos.${casino.id}.buttonText`),
  }));

  // Sort by rating descending
  const sortedCasinos = [...casinos].sort(
    (a, b) => (ratings[b.id] ?? 0) - (ratings[a.id] ?? 0)
  );

  return (
    <div>
      <CasinoHeader />

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mb-4" style={{ fontSize: "1.6rem", fontWeight: "bold"  }}>
             {t("home.recommendations")} </h2>
            <p>{t("home.intro")}</p>
            <p>{t("home.topNote")}</p>

            {sortedCasinos.map((casino) => (
              <div key={casino.id} className="card mb-4 casino-card position-relative">
                <div className="row g-0 align-items-center">
                  
                {/* ⭐ Rating Pill with Trustpilot Logo */}
        {ratings[casino.id] && (
  <div
    onClick={() => window.open(trustpilotLinks[casino.id], "_blank")}
    className="position-absolute top-0 start-0 m-2 px-2 py-1"
    style={{
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "0.75rem",
      width: "auto",
      borderRadius: "0.5rem",
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      cursor: "pointer",
      gap: "6px",
    }}
    title="View on Trustpilot"
  >
    <Star size={12} color="#ffc107" fill="#ffc107" />
    <span>{ratings[casino.id]}/5</span>
    <img
      src={trustpilotLogoLight}
      alt="Trustpilot"
      style={{
        width: "55px",
        height: "auto",
      }}
    />
        </div>
           )}


                  <div className="col-md-3 text-center p-3 d-flex flex-column align-items-center">
                   
                    <img
                      src={casino.imageAlt}
                      alt="casino"
                      className="img-fluid rounded mt-4"
                      style={{
                        width: "200px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                     <div className="d-flex flex-row mt-3 gap-1">
                    <div className="mb-2" style={{ alignSelf: "flex-start", fontWeight: "bold" }}>
                      {casino.id}.
                    </div> 
                    <strong className="">    {casino.name}</strong>
                   
                    
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body text-center">
                        <p className="fw-bold mb-1" style={{  }}>{casino.title_bonus}</p>
                      <p className="fw-bold mb-4" style={{ color: "#28a745", fontSize: "13px"}}>{casino.bonus}</p>
                      <p className="text-muted" style={{ whiteSpace: "pre-line" }}>{casino.details}</p>
                    </div>
                  </div>

                  <div className="col-md-3 text-center p-3">
                    <p className="fw-bold">{casino.textbuton}</p>
                    <a href={`/main/${casino.redirectSlug}`} className="btn btn-danger">
                      {casino.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-muted text-center mt-3">{t("home.offerDisclaimer")}</p>
          </div>

         <CasinoSidebar/>
        </div>
      </div>

      <UserReviews />
      <FAQ/>
      <CasinoFooter />
    </div>
  );
}
