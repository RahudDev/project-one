// src/data/casinosData.ts
import MyStake from "../assets/mystake.jpg";
import Vave from "../assets/vave.png";
import Cloudbet from "../assets/cloudbet.webp";
import Bitsler from "../assets/bitsler.jpg";
import BitStarz from "../assets/bitstarz.jpg";
import BetOnline from "../assets/betonline.webp";
import StakePrix from "../assets/StakePrix.jpg";
import TgCasino from "../assets/tg_casino.png";
import Nokyc from "../assets/Nokyc.png";
import Fastslots from "../assets/fastslots.jpeg";



export type Casino = {
  id: number;
  name: string; // base name or title without numbering
  imageAlt: string;
  redirectSlug: string;
};



export const casinosData: Casino[] = [
  {
    id: 1,
    name: "BitStarz",
    imageAlt: BitStarz,
    redirectSlug: "bitstarz",
  },
  {
    id: 2,
    name: "MyStake",
    imageAlt: MyStake,
    redirectSlug: "mystake",
  },
  {
    id: 3,
    name: "Cloudbet",
    imageAlt: Cloudbet,
    redirectSlug: "cloudbet",
  },
  {
    id: 4,
    name: "Nokyc",
    imageAlt: Nokyc,
    redirectSlug: "nokyc",
  },
  {
    id: 5,
    name: "Vave",
    imageAlt: Vave,
    redirectSlug: "vave",
  },
  {
    id: 6,
    name: "Bitsler",
    imageAlt: Bitsler,
    redirectSlug: "bitsler",
  },
  {
    id: 7,
    name: "BetOnline",
    imageAlt: BetOnline,
    redirectSlug: "betonline",
  },
  {
    id: 8,
    name: "TG Casino",
    imageAlt: TgCasino,
    redirectSlug: "tgcasino",
  },
  {
    id: 9,
    name: "Fastslots",
    imageAlt: Fastslots,
    redirectSlug: "fastslots",
  },
  {
    id: 10,
    name: "StakePrix",
    imageAlt: StakePrix,
    redirectSlug: "stakeprix",
  },
];



