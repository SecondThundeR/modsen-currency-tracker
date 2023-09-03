import React from "react";

import bovespaIcon from "@/assets/Bovespa.png";
import ifixIcon from "@/assets/IFIX.png";
import pesoIcon from "@/assets/Peso.png";
import usdIcon from "@/assets/USD.png";
import CurrencyGrid from "@/components/ui/CurrencyGrid";

import styles from "./Home.module.css";

const PLACEHOLDER_DATA = {
  stocks: [
    {
      name: "Bovespa Index",
      details: "0.15%",
      iconSrc: bovespaIcon,
    },
    {
      name: "IFIX",
      details: "0.15%",
      iconSrc: ifixIcon,
    },
  ],
  quotes: [
    {
      name: "Commercial Dollar",
      details: "R$ 5,13",
      iconSrc: usdIcon,
    },
    {
      name: "Argentine Peso",
      details: "R$ 0,02",
      iconSrc: pesoIcon,
    },
  ],
};

function Home() {
  return (
    <div className={styles["Home"]}>
      <CurrencyGrid
        sectionTitle="Stocks"
        sectionInfo={PLACEHOLDER_DATA.stocks}
      />
      <CurrencyGrid
        sectionTitle="Quotes"
        sectionInfo={PLACEHOLDER_DATA.quotes}
      />
    </div>
  );
}

export default Home;
