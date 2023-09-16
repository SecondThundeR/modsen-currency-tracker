import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import HeroBlock from "@/components/ui/HeroBlock";
import LastUpdated from "@/components/ui/LastUpdated";
import useThemeChange from "@/hooks/useThemeChange";
import { RootState } from "@/store";

function Root() {
  const lastUpdatedAt = useSelector(
    (state: RootState) => state.currency.lastUpdatedAt,
  );
  const onThemeChange = useThemeChange();

  return (
    <>
      <Header onThemeChange={onThemeChange} />
      <HeroBlock />
      {lastUpdatedAt && <LastUpdated updateTime={lastUpdatedAt} />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
