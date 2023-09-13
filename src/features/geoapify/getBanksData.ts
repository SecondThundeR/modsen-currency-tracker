import axios from "axios";

import { GEOAPIFY_PLACES_URL } from "@/constants/endpoints";
import { GEOAPIFY_PLACE_ID } from "@/constants/geoapifyPlaceID";
import { PlaceDetails } from "@/types/place";

export async function getBanksData(placeId = GEOAPIFY_PLACE_ID) {
  try {
    const response = await axios.get<PlaceDetails>(GEOAPIFY_PLACES_URL, {
      params: {
        categories: "service.financial",
        filter: `place:${placeId}`,
        lang: "en",
        limit: 30,
        apiKey: process.env.GEOAPIFY_KEY,
      },
    });
    return response.data;
  } catch (error: unknown) {
    console.error(error);
  }
}
