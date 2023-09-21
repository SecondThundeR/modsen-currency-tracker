import useCurrencyModal from "@/hooks/useCurrencyModal";
import { CurrencyType } from "@/types/currency";

export interface CurrencyGridProps {
  sectionTitle: string;
  sectionInfo: CurrencyType[];
  onSectionClick: ReturnType<typeof useCurrencyModal>["handlers"]["onOpen"];
}
