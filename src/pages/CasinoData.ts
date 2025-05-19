// src/data/casinosData.ts
import jokerstar from "../assets/jokistart.jpeg";
import betano from "../assets/betano.jpeg";
import lowen from "../assets/lown.jpeg";
import bingbong from "../assets/bingbow.jpeg";
import jackpot from "../assets/jack.jpeg";

export type Casino = {
  id: number;
  name: string; // base name or title without numbering
  imageAlt: string;
  redirectSlug: string;
};

export const casinosData: Casino[] = [
  {
    id: 1,
    name: "BingBong",
    imageAlt: bingbong,
    redirectSlug: "bingbong",
  },
  {
    id: 2,
    name: "Jackpot Piraten",
    imageAlt: jackpot,
    redirectSlug: "jackpotpiraten",
  },
  {
    id: 3,
    name: "Jokerstar",
    imageAlt: jokerstar,
    redirectSlug: "jokerstar",
  },
  {
    id: 4,
    name: "Löwen Play",
    imageAlt: lowen,
    redirectSlug: "lowenplay",
  },
  {
    id: 5,
    name: "Betano",
    imageAlt: betano,
    redirectSlug: "betano",
  },
  // ... more casinos here ...
];

