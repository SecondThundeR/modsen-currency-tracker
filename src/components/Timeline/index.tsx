import React, { ChangeEventHandler } from "react";

import CurrencySelectInput from "@/components/form/CurrencySelectInput";
import NumberInput from "@/components/form/NumberInput";
import TimelineCurrencyInfo from "@/components/ui/TimelineCurrencyInfo";
import Toast from "@/components/ui/Toast";
import { CURRENCY_OPTIONS } from "@/constants/currencyOptions";
import { rangeNumberObservable } from "@/lib/observable";

import styles from "./Timeline.module.css";

interface TimelineProps {}

interface TimelineState {
  isToastOpen: boolean;
  selectedDays: number;
  selectedCurrencyId: string | undefined;
}

const DEFAULT_DAYS_NUMBER = 14;

class Timeline extends React.Component<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props);
    this.state = {
      isToastOpen: false,
      selectedDays: DEFAULT_DAYS_NUMBER,
      selectedCurrencyId: undefined,
    };
  }

  controlToast = (rangeNumber: number) => {
    if (rangeNumber >= 30) this.setState({ isToastOpen: true });
    else this.setState({ isToastOpen: false });
  };

  updateSelectedCurrency: ChangeEventHandler<HTMLSelectElement> = (event) => {
    this.setState({ selectedCurrencyId: event.target.value });
  };

  updateSelectedDays: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newRangeDays = Number(event.target.value);
    this.setState({ selectedDays: newRangeDays });
    rangeNumberObservable.notify(newRangeDays);
  };

  componentDidMount() {
    rangeNumberObservable.subscribe(this.controlToast);
  }

  componentWillUnmount() {
    rangeNumberObservable.unsubscribe(this.controlToast);
  }

  render() {
    const { isToastOpen, selectedCurrencyId, selectedDays } = this.state;
    return (
      <div className={styles["Timeline"]}>
        <CurrencySelectInput
          value={selectedCurrencyId}
          onChange={this.updateSelectedCurrency}
          options={CURRENCY_OPTIONS}
          optionsHeaderText="Select currency"
        />
        {selectedCurrencyId !== undefined && (
          <div className={styles["Timeline__Info"]}>
            <TimelineCurrencyInfo
              {...CURRENCY_OPTIONS.find(
                (item) => item.id === selectedCurrencyId,
              )!}
            />
            <div className={styles["Timeline__DaysRange"]}>
              <h1>Select chart days range:</h1>
              <NumberInput
                value={selectedDays}
                onChange={this.updateSelectedDays}
              />
            </div>
          </div>
        )}
        <Toast isOpen={isToastOpen}>
          Successfully built a chart for the current exchange rate
        </Toast>
      </div>
    );
  }
}

export default Timeline;
