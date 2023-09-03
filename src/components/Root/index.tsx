import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBlock from "@/components/HeroBlock";
import LastUpdated from "@/components/LastUpdated";

function Root() {
  return (
    <div>
      <Header />
      <HeroBlock />
      <LastUpdated updateTime="12:00 pm" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
