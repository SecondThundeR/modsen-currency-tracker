import { PropsWithChildren } from "react";

import useCurrencyModal from "@/hooks/useCurrencyModal";

export interface BackdropProps extends PropsWithChildren {
  closeModal: ReturnType<typeof useCurrencyModal>["handlers"]["onClose"];
}
