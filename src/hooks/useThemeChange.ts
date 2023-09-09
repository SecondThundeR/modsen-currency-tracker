import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { toggleTheme } from "@/store/theme";

function useThemeChange() {
  const dispatch = useDispatch();

  const onThemeChange = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return onThemeChange;
}

export default useThemeChange;
