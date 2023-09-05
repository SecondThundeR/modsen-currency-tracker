import React, { useMemo } from "react";

import CurrencyGrid from "@/components/ui/CurrencyGrid";
import Loader from "@/components/ui/Loader";
import PlaceholderHero from "@/components/ui/PlaceholderHero";
import { PLACEHOLDER_STOCKS_DATA } from "@/constants/placeholderStocks";
import useCurrencyModal from "@/hooks/useCurrencyModal";
import useRates from "@/hooks/useRates";
import { mergeOptionsWithRates } from "@/utils/mergeOptionsWithRates";

import CurrencyModal from "../ui/CurrencyModal";
import styles from "./Home.module.css";

function Home() {
  const {
    isOpen,
    selectedId,
    handlers: { onOpen, onClose },
  } = useCurrencyModal();
  const rates = useRates("USD");
  const sectionData = useMemo(
    () => mergeOptionsWithRates(rates.currentRates),
    [rates.currentRates],
  );

  if (rates.isFetching) return <Loader />;

  if (rates.isError) return <PlaceholderHero text="No data!" />;

  return (
    <div className={styles["Home"]}>
      <CurrencyGrid
        sectionTitle="Stocks"
        sectionInfo={PLACEHOLDER_STOCKS_DATA}
      />
      <CurrencyGrid
        sectionTitle="Quotes"
        sectionInfo={sectionData}
        onSectionClick={onOpen}
      />
      {isOpen && <CurrencyModal selectedId={selectedId} closeModal={onClose} />}
    </div>
  );
}

export default Home;
