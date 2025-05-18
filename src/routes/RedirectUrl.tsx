// src/pages/CasinoRedirect.tsx

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface CasinoLinks {
  [key: string]: string;
}

const casinoLinks: CasinoLinks = {
  jokerstar: "https://m.jokerstar.de/Redirect.aspx?mid=179&sid=923&cid=&pid=&affid=268",
  betano: "https://www.pfxtracking.com/offer/load?o=279305E7D4774AB5899839DB54FD739B",
  lowenplay: "https://anr.loewen-play.de/redirect.aspx?pid=3662&bid=1581",
  bingbong: "https://www.bingbong.de/?iclid=1-22c00907-7280-367a-807a-a680720709c0-a89905",
  jackpotpiraten: "https://www.jackpotpiraten.de/?iclid=1-22c00907-9a95-3163-8063-e1959a0709c0-a89599",
};

export default function CasinoRedirect() {
  const { casinoName } = useParams<{ casinoName: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!casinoName) {
      navigate("/404");
      return;
    }

    const url = casinoLinks[casinoName.toLowerCase()];
    if (url) {
      window.location.href = url;
    } else {
      navigate("/404");
    }
  }, [casinoName, navigate]);

  return (
    <div className="text-center mt-5">
      <h3>Redirecting...</h3>
    </div>
  );
}
