import { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";

function useTheme() {
  const { currentTheme } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    if (currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [currentTheme]);
}

export default useTheme;
