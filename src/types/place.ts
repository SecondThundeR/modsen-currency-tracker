interface PlaceFeature {
  type: "Feature";
  properties: {
    name: string;
    lon: number;
    lat: number;
    address_line2: string;
  };
  geometry: { type: "Point"; coordinates: [number, number] };
}

export interface EnhancedPlaceFeature extends PlaceFeature {
  availableCurrencies: string[];
}

export interface PlaceDetails {
  type: "FeatureCollection";
  features: PlaceFeature[];
}

export interface EnhancedPlaceDetails {
  type: "FeatureCollection";
  features: EnhancedPlaceFeature[];
}
