import { useCallback, useState } from "react";

type UseBooleanToggleReturn = [boolean, () => void];

function useBooleanToggle(
  initialBoolean: boolean = false,
): UseBooleanToggleReturn {
  const [value, setValue] = useState(initialBoolean);

  const onToggle = useCallback(() => setValue((prev) => !prev), []);

  return [value, onToggle];
}

export default useBooleanToggle;
