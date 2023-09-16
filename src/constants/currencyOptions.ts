import arsIcon from "@/assets/ARS.png";
import audIcon from "@/assets/AUD.png";
import btcIcon from "@/assets/BTC.png";
import cadIcon from "@/assets/CAD.png";
import eurIcon from "@/assets/EUR.png";
import jpyIcon from "@/assets/JPY.png";
import krwIcon from "@/assets/KRW.png";
import lbaIcon from "@/assets/LBA.png";
import usdIcon from "@/assets/USD.png";
import { CurrencyType } from "@/types/currency";

export const CURRENCY_OPTIONS = [
  {
    id: "ARS",
    iconSrc: arsIcon,
    name: "Argentine Peso",
  },
  {
    id: "AUD",
    iconSrc: audIcon,
    name: "Australian Dollar",
  },
  {
    id: "BTC",
    iconSrc: btcIcon,
    name: "Bitcoin",
  },
  {
    id: "CAD",
    iconSrc: cadIcon,
    name: "Canadian Dollar",
  },
  {
    id: "EUR",
    iconSrc: eurIcon,
    name: "Euro",
  },
  {
    id: "JPY",
    iconSrc: jpyIcon,
    name: "Yen",
  },
  {
    id: "KRW",
    iconSrc: krwIcon,
    name: "Won",
  },
  {
    id: "LBA",
    iconSrc: lbaIcon,
    name: "Libra",
  },
  {
    id: "USD",
    iconSrc: usdIcon,
    name: "Commercial Dollar",
  },
] satisfies CurrencyType[];
