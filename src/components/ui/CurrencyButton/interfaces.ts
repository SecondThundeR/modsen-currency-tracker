import { ButtonHTMLAttributes } from "react";

import { CurrencyType } from "@/types/currency";

export interface CurrencyButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    CurrencyType {}
