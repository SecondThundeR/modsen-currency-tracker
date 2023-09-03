import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import HeroBlock from "@/components/ui/HeroBlock";
import LastUpdated from "@/components/ui/LastUpdated";

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
