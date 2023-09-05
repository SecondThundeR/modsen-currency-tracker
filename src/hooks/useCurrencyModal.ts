import { useCallback, useState } from "react";

function useCurrencyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const onOpen = useCallback((id: string) => {
    setIsOpen(true);
    setSelectedId(id);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
    setSelectedId(null);
  }, []);

  return {
    isOpen,
    selectedId,
    handlers: {
      onOpen,
      onClose,
    },
  };
}

export default useCurrencyModal;
