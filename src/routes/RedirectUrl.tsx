// src/pages/CasinoRedirect.tsx

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface CasinoLinks {
  [key: string]: string;
}

const casinoLinks: { [key: string]: string } = {
  bitstarz: "https://bzstarz.com/b2b7c9ef2", // 4.3
  mystake: "https://mystake.bet/de?affid=3164816&cxd=3164816_1249980", // 4.1
  cloudbet: "https://www.cloudgames012.com/en/landing/bitcoin-bonus/?af_token=8f7b99c44441531fd4596f8999f20e53&aftm_campaign=First+Campaign&aftm_source=YT+and+IG", // 4.1
  nokyc: "https://record.discasinoaffiliates.com/_AGPv2QVogBBp4_7XfVIhO2Nd7ZgqdRLk/1/", // 4.1
  vave: "https://top.moxtop.com/redirect.aspx?pid=72735&lpid=645&bid=1481", // 4.0
  bitsler: "https://www.bitsler.com/?c=vxcq9dp7qe8uwan8", // 4.0
  betonline: "https://record.betonlineaffiliates.ag/_zwyclRXXN1kTMKfio_tvj2Nd7ZgqdRLk/1/", // 4.0
  tgcasino: "https://record.discasinoaffiliates.com/_AGPv2QVogBCO--BLE9QE82Nd7ZgqdRLk/1/", // 4.0
  fastslots: "https://record.discasinoaffiliates.com/_AGPv2QVogBA79R6Xuh-yI2Nd7ZgqdRLk/1/", // 3.6
  stakeprix: "https://www.stakeprix.com/referral/1k8z5rETIZg2pZQu", // 2.3
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
