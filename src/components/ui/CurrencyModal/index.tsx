import React, {
  ChangeEvent,
  memo,
  MouseEvent,
  useCallback,
  useState,
} from "react";

import Input from "@/components/form/Input";
import SelectInput from "@/components/form/SelectInput";
import Backdrop from "@/components/ui/Backdrop";
import Icon from "@/components/ui/Icon";
import { CURRENCY_OPTIONS } from "@/constants/currencyOptions";
import useConversionRate from "@/hooks/useConversionRate";

import styles from "./CurrencyModal.module.css";
import { CurrencyModalProps } from "./interfaces";

const CurrencyModal = memo(function CurrencyModal({
  selectedId,
  closeModal,
}: CurrencyModalProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<string>();
  const [selectedAmount, setSelectedAmount] = useState(1);
  const { conversionInfo, conversionOptions, isLoading, isError } =
    useConversionRate(selectedId);

  const selectedRate = conversionInfo?.rates.find(
    (rate) => rate.asset_id_quote === selectedCurrency,
  );
  const currencyData = CURRENCY_OPTIONS.find(
    (currency) => currency.id === selectedId,
  );

  const onSetCurrency = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) =>
      setSelectedCurrency(event.target.value),
    [],
  );

  const onSetAmount = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setSelectedAmount(Number(event.target.value)),
    [],
  );

  const stopModalPropagation = useCallback(
    (event: MouseEvent<HTMLDivElement>) => event.stopPropagation(),
    [],
  );

  if (selectedId === null || currencyData === undefined) return null;

  const { name, iconSrc } = currencyData;

  return (
    <Backdrop closeModal={closeModal}>
      <div
        data-cy="currency-modal"
        data-testid="currency-modal"
        className={styles["CurrencyModal"]}
        onClick={stopModalPropagation}
      >
        <div className={styles["CurrencyModal__CurrencyInfo"]}>
          <Icon width={64} height={64} src={iconSrc} title={name} alt={name} />
          <div className={styles["CurrencyModal__CurrencyInfoDetails"]}>
            <p>Selected currency</p>
            <h1>{name}</h1>
          </div>
        </div>

        <div className={styles["CurrencyModal__CurrencySelect"]}>
          {isLoading && <p>Loading...</p>}
          {isError && (
            <p>There is an error while trying to get rate. We are sorry...</p>
          )}
          {!isLoading && !isError && conversionOptions && (
            <>
              <p>Target currency:</p>
              <SelectInput
                value={selectedCurrency}
                optionsHeaderText="Select currency"
                onChange={onSetCurrency}
                options={conversionOptions}
              />
            </>
          )}
        </div>

        {selectedCurrency && selectedRate && (
          <div className={styles["CurrencyModal__CurrencyResult"]}>
            <div className={styles["CurrencyModal__CurrencyAmount"]}>
              <p>Select amount of currency:</p>
              <Input
                type="number"
                value={selectedAmount}
                onChange={onSetAmount}
              />
            </div>
            <h1>
              {selectedAmount} {name} is{" "}
              {(selectedAmount * selectedRate.rate).toFixed(6)}{" "}
              {selectedRate.asset_id_quote}
            </h1>
          </div>
        )}

        <div className={styles["CurrencyModal__CurrencyFooter"]}>
          <p>Click outside to close this modal</p>
        </div>
      </div>
    </Backdrop>
  );
});

export default CurrencyModal;
