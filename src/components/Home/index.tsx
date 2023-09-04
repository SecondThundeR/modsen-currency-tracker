import React, { useMemo } from "react";

import CurrencyGrid from "@/components/ui/CurrencyGrid";
import Loader from "@/components/ui/Loader";
import PlaceholderHero from "@/components/ui/PlaceholderHero";
import { PLACEHOLDER_STOCKS_DATA } from "@/constants/placeholderStocks";
import useRates from "@/hooks/useRates";
import { mergeOptionsWithRates } from "@/utils/mergeOptionsWithRates";

import styles from "./Home.module.css";

function Home() {
  const rates = useRates("USD");
  const sectionData = useMemo(
    () => mergeOptionsWithRates(rates.currentRates),
    [rates.currentRates],
  );

  if (rates.isFetching) return <Loader />;

  if (rates.isError) return <PlaceholderHero text="No data!" />;

  console.log(rates.currentRates);

  return (
    <div className={styles["Home"]}>
      <CurrencyGrid
        sectionTitle="Stocks"
        sectionInfo={PLACEHOLDER_STOCKS_DATA}
      />
      <CurrencyGrid sectionTitle="Quotes" sectionInfo={sectionData} />
    </div>
  );
}

export default Home;
