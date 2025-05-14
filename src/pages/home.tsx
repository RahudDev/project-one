import React from "react";
import jokerstar from '../assets/jokistart.jpeg';
import betano from '../assets/betano.jpeg';
import lowen from '../assets/lown.jpeg';
import bingbong from '../assets/bingbow.jpeg';
import jackpot from '../assets/jack.jpeg';
import CasinoHeader from "../components/Header";
import CasinoFooter from "../components/Footer";
import UserReviews from "../components/userReviews";



type Casino = {
  id: number;
  name: string;
  imageAlt: string;
  bonus: string;
  details: string;
  payout: string;
  textbuton: string;
  buttonText: string;
  LinkButton: string;
};

const casinos: Casino[] = [
  {
    id: 1,
    name: "1. Jokerstar",
    imageAlt: jokerstar,
    bonus: "200 % bis zu 100 € + 200 Free Spins",
    details: "Auszahlungsquote: 94 bis 97 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton: "https://m.jokerstar.de/Redirect.aspx?mid=179&sid=923&cid=&pid=&affid=268",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
  {
    id: 2,
    name: "2. Betano",
    imageAlt: betano,
    bonus: "100 % bis zu 100 € + 20 € Freiwette",
    details: "Auszahlungsquote: 92,1 bis 95 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton: "https://www.pfxtracking.com/offer/load?o=279305E7D4774AB5899839DB54FD739B",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
   {
    id: 3,
    name: "3. Löwen Play",
    imageAlt: lowen,
    bonus: "100 % bis zu 100 € + 150 Free Spins",
    details:
      "Auszahlungsquote: 93 bis 97 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton: "https://anr.loewen-play.de/redirect.aspx?pid=3662&bid=1581",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
  {
    id: 4,
    name: "4. BingBong",
    imageAlt: bingbong,
    bonus: "100 % bis zu 100 € + 50 Free Spins (Book of Ra Deluxe)",
    details:
      "Auszahlungsquote: 93 bis 97 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton:
      "https://www.bingbong.de/?iclid=1-22c00907-7280-367a-807a-a680720709c0-a89905",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
  {
    id: 5,
    name: "5. Jackpot Piraten",
    imageAlt: jackpot,
    bonus: "100 % bis zu 100 € + 50 Free Spins",
    details:
      "Auszahlungsquote: 92,7 % – 97,54 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton:
      "https://www.jackpotpiraten.de/?iclid=1-22c00907-9a95-3163-8063-e1959a0709c0-a89599",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
  // ... more casinos ...
];

export default function CasinoPage() {
  return (
    <div>
      {/* HEADER */}
     <CasinoHeader/>

      <div className="container">
        <div className="row">
          {/* MAIN CONTENT */}
          <div className="col-lg-8">
            <h2 className="mb-4">Unsere Empfehlungen basierend auf Bonusangeboten im April 2025:</h2>
            <p>Bei Lucky Charms Gambling nutzen wir eine KI-gestützte Formel, um die besten Online-Casinos in Deutschland sowohl insgesamt als auch monatlich zu bewerten. Unsere geprüften Online-Casinos sind vollständig lizenziert, legal und bieten höchste Sicherheitsstandards. Spieler profitieren von attraktiven Bonusangeboten, einer großen Auswahl an Casinospielen und einem erstklassigen Spielerlebnis in einer vertrauenswürdigen Umgebung.</p>
            {casinos.map((casino) => (
              <div key={casino.id} className="card mb-4">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3 text-center p-3">
                    <img src={casino.imageAlt} alt="casino" className="img-fluid rounded" />
                    <strong className="d-block mt-2">{casino.name}</strong>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <p className="text-warning fw-bold mb-2">{casino.bonus}</p>
                      <p className="text-muted" style={{ whiteSpace: "pre-line" }}>{casino.details}</p>
                    </div>
                  </div>
                  <div className="col-md-3 text-center p-3">
                    <p className="fw-bold">{casino.textbuton}</p>
                    <a href={casino.LinkButton} className="btn btn-danger">
                      {casino.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-muted text-center mt-3">
              Angebot gilt nur für neue Spieler. Verfügbar für Personen ab 18 Jahren.
            </p>
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
            <div className=" p-3 mb-4 rounded shadow-sm">
              <h5>Beliebteste Casino Spiele</h5>
              <ul className="list-unstyled">
                <li>🎰 Spielautomaten</li>
                <li>🎲 Roulette</li>
                <li>🃏 Blackjack</li>
                <li><a href="/" className="text-primary text-decoration-underline">Weitere Spiele</a></li>
              </ul>
            </div>

            <div className=" p-3 mb-4 rounded shadow-sm">
              <h5>Hilfe & Infos</h5>
              <ul className="list-unstyled">
                <li>📘 Online Casino Ratgeber</li>
                <li>ℹ️ Infos zu Online Casinos & GlüStV</li>
              </ul>
            </div>

            <div className=" p-3 mb-4 rounded shadow-sm">
              <h5>Beste Online Casinos <span className="text-warning">Apr. 2025</span></h5>
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
              <h5>Neue Online Casinos</h5>
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
              ZUM SEITENANFANG
            </button>
          </div>
        </div>
      </div>
      <UserReviews/>

      {/* FOOTER */}
      <CasinoFooter/>
    </div>
  );
}
