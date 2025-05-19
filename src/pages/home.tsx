import React from "react";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react"; // Star icon
import CasinoHeader from "../components/Header";
import CasinoFooter from "../components/Footer";
import UserReviews from "../components/userReviews";
import './Home.css';
import { casinosData, Casino } from "./CasinoData";





const ratings: { [key: number]: number } = {
 1 : 4.6, //bingbong
 2 : 4.6, //jackpot piraten
 3 : 4.5, // jokerstar
 4 : 4.4, //lowen play
 5 : 4.4, // Betano 
};

export default function CasinoPage() {
  const { t } = useTranslation();
  const games = t("home.sidebar.games", { returnObjects: true }) as string[];
  const helpItems = t("home.sidebar.helpItems", { returnObjects: true }) as string[];

  // Now build casinos array by merging static data + translated strings:
  const casinos: (Casino & {
    bonus: string;
    details: string;
    payout: string;
    textbuton: string;
    buttonText: string;
    displayName: string;
  })[] = casinosData.map(casino => ({
    ...casino,
    displayName: `${casino.id}. ${casino.name}`,
    bonus: t(`home.casinos.${casino.id}.bonus`),
    details: t(`home.casinos.${casino.id}.details`),
    payout: "", // if you have payout translations add here
    textbuton: t(`home.casinos.${casino.id}.textbuton`),
    buttonText: t(`home.casinos.${casino.id}.buttonText`),
  }));

  return (
    <div>
      <CasinoHeader />

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mb-4">{t("home.recommendations")}</h2>
            <p>{t("home.intro")}</p>
            <p>{t("home.topNote")}</p>
            {casinos.map((casino) => (
              <div key={casino.id} className="card mb-4 casino-card">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3 text-center p-3">
                    <img
                      src={casino.imageAlt}
                      alt="casino"
                      className="img-fluid rounded"
                      style={{
                        width: "200px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                    <strong className="d-block mt-2">{casino.name}</strong>

                    {/* ⭐ Star + Rating */}
                    {ratings[casino.id] && (
                      <div className="d-flex align-items-center justify-content-center mt-1">
                        <Star size={16} color="#ffc107" fill="#ffc107" className="me-1" />
                        <span>{ratings[casino.id]}/5</span>
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <div className="card-body text-center">
                      <p className="fw-bold mb-4" style={{ color: "#28a745" }}>{casino.bonus}</p>
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

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="p-3 mb-4 rounded shadow-sm">
              <h5>{t("home.sidebar.popularGames")}</h5>
              <ul className="list-unstyled">
                {games.map((game, idx) => (
                  <li key={idx}>{game}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 mb-4 rounded shadow-sm">
              <h5>{t("home.sidebar.helpInfo")}</h5>
              <ul className="list-unstyled">
                {helpItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 mb-4 rounded shadow-sm">
              <h5 dangerouslySetInnerHTML={{ __html: t("home.sidebar.bestCasinos") }}></h5>
              <ol className="ps-3">
                <li>JINSPI</li>
                <li>Kingmaker</li>
                <li>REVOLUTION CASINO</li>
                <li>CASINOVA</li>
                <li>Slotsville</li>
                <li>SPUNTER</li>
                <li>VULKAN</li>
                <li>LUCKY DREAMS</li>
                <li>FRUITY</li>
                <li>GOLDEN CLUB</li>
              </ol>
            </div>

            <div className="p-3 mb-4 rounded shadow-sm">
              <h5>{t("home.sidebar.newCasinos")}</h5>
              <ul className="list-unstyled">
                <li>1. TRIVELABET – 1.000€*</li>
                <li>2. GGSET – 1.000€*</li>
                <li>3. GOLD CLUB – 500€*</li>
              </ul>
            </div>

            <button
              className="btn btn-secondary w-100 mt-3"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("home.sidebar.topButton")}
            </button>
          </div>
        </div>
      </div>

      <UserReviews />
      <CasinoFooter />
    </div>
  );
}
