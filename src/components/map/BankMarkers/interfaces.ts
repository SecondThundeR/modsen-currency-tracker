import { EnhancedPlaceDetails, EnhancedPlaceFeature } from "@/types/place";

export interface BankMarkersProps {
  banksData: EnhancedPlaceDetails;
  setPopupInfo: (selectedBank: EnhancedPlaceFeature) => void;
}
