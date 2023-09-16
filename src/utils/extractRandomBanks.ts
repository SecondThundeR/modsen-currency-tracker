import { PlaceDetails } from "@/types/place";

const DATA_LIMIT = 10;

export function extractRandomBanks(banksData: PlaceDetails): PlaceDetails {
  const newBanksData = [...banksData.features];

  for (let i = newBanksData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newBanksData[i], newBanksData[j]] = [newBanksData[j], newBanksData[i]];
  }

  return {
    type: "FeatureCollection",
    features: [...newBanksData.slice(0, DATA_LIMIT)],
  };
}
