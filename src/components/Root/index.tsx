import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import HeroBlock from "../HeroBlock";

function Root() {
  return (
    <div>
      <Header />
      <HeroBlock />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
