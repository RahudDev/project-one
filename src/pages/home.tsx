import React from "react";
import { useTranslation } from "react-i18next";
import jokerstar from "../assets/jokistart.jpeg";
import betano from "../assets/betano.jpeg";
import lowen from "../assets/lown.jpeg";
import bingbong from "../assets/bingbow.jpeg";
import jackpot from "../assets/jack.jpeg";
import CasinoHeader from "../components/Header";
import CasinoFooter from "../components/Footer";
import UserReviews from "../components/userReviews";
import './Home.css';



type Casino = {
  id: number;
  name: string;
  imageAlt: string;
  bonus: string;
  details: string;
  payout: string;
  textbuton: string;
  buttonText: string;
  redirectSlug: string;
};


export default function CasinoPage() {
  const { t } = useTranslation();
  const games = t("home.sidebar.games", { returnObjects: true }) as string[];
  const helpItems = t("home.sidebar.helpItems", {
    returnObjects: true,
  }) as string[];


  const casinos: Casino[] = [
  {
    id: 1,
    name: "1. Jokerstar",
    imageAlt: jokerstar,
    bonus: t("home.casinos.1.bonus"),
   details: t("home.casinos.1.details"),
    payout: "",
    redirectSlug: "jokerstar",
    textbuton: t("home.casinos.1.textbuton"),
    buttonText: t("home.casinos.1.buttonText")
  },
  {
    id: 2,
    name: "2. Betano",
    imageAlt: betano,
    bonus: t("home.casinos.2.bonus"),
   details: t("home.casinos.2.details"),
    payout: "",
   redirectSlug : "betano",
    textbuton: t("home.casinos.2.textbuton"),
    buttonText: t("home.casinos.2.buttonText")
  },
  {
    id: 3,
    name: "3. Löwen Play",
    imageAlt: lowen,
     bonus: t("home.casinos.3.bonus"),
    details: t("home.casinos.3.details"),
    payout: "",
    redirectSlug : "lowenplay",
    textbuton: t("home.casinos.3.textbuton"),
    buttonText: t("home.casinos.3.buttonText")
  },
  {
    id: 4,
    name: "4. BingBong",
    imageAlt: bingbong,
    bonus: t("home.casinos.4.bonus"),
   details: t("home.casinos.4.details"),
    payout: "",
   redirectSlug : "bingbong",
    textbuton: t("home.casinos.4.textbuton"),
    buttonText: t("home.casinos.4.buttonText")
  },
  {
    id: 5,
    name: "5. Jackpot Piraten",
    imageAlt: jackpot,
    bonus: t("home.casinos.5.bonus"),
   details: t("home.casinos.5.details"),
    payout: "",
   redirectSlug : "jackpotpiraten",
     textbuton: t("home.casinos.5.textbuton"),
   buttonText: t("home.casinos.5.buttonText")
  },
  // ... more casinos ...
];

  return (
    <div>
      {/* HEADER */}
      <CasinoHeader />

      <div className="container">
        <div className="row">
          {/* MAIN CONTENT */}
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
                  </div>
                  <div className="col-md-6">
                    <div className="card-body text-center">
                      <p className="fw-bold mb-4" style={{ color: "#28a745" }}>
                        {casino.bonus}
                      </p>
                      <p
                        className="text-muted"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {casino.details}
                      </p>
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
            <p className="text-muted text-center mt-3">
              {t("home.offerDisclaimer")}
            </p>
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
            <div className=" p-3 mb-4 rounded shadow-sm">
              <h5>{t("home.sidebar.popularGames")}</h5>
              <ul className="list-unstyled">
                {games.map((game, idx) => (
                  <li key={idx}>{game}</li>
                ))}
              </ul>
            </div>

            <div className=" p-3 mb-4 rounded shadow-sm">
              <h5>{t("home.sidebar.helpInfo")}</h5>
              <ul className="list-unstyled">
                {helpItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className=" p-3 mb-4 rounded shadow-sm">
              <h5
                dangerouslySetInnerHTML={{
                  __html: t("home.sidebar.bestCasinos"),
                }}
              ></h5>
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

            <div className=" p-3 mb-4 rounded shadow-sm">
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

      {/* FOOTER */}
      <CasinoFooter />
    </div>
  );
}
