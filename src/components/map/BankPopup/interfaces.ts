import { EnhancedPlaceFeature } from "@/types/place";

export interface BankPopupProps {
  bankDetails: EnhancedPlaceFeature;
  resetPopupInfo: () => void;
}
