import React, { ChangeEventHandler } from "react";

import CurrencySelectInput from "@/components/form/CurrencySelectInput";
import Input from "@/components/form/Input";
import Loader from "@/components/ui/Loader";
import TimelineChartGraph from "@/components/ui/TimelineChartGraph";
import TimelineCurrencyInfo from "@/components/ui/TimelineCurrencyInfo";
import Toast from "@/components/ui/Toast";
import { CURRENCY_OPTIONS } from "@/constants/currencyOptions";
import { DEFAULT_RATE_ASSET_ID } from "@/constants/defaultRateAssetID";
import { getRatesHistory } from "@/features/coinapi/getRatesHistory";
import { rangeNumberObservable } from "@/lib/observable";
import { RateHistory } from "@/types/coinapi";

import styles from "./Timeline.module.css";

interface TimelineProps {}

interface TimelineState {
  isToastOpen: boolean;
  selectedDays: number;
  selectedCurrencyId: string | undefined;
  currentHistoryRate: RateHistory[] | undefined;
}

const DEFAULT_DAYS_NUMBER = 14;

class Timeline extends React.Component<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props);
    this.state = {
      isToastOpen: false,
      selectedDays: DEFAULT_DAYS_NUMBER,
      selectedCurrencyId: undefined,
      currentHistoryRate: undefined,
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

  updateHistoryRate = async () => {
    if (!this.state.selectedCurrencyId) return;
    this.setState({ currentHistoryRate: undefined });
    const res = await getRatesHistory(
      this.state.selectedCurrencyId,
      DEFAULT_RATE_ASSET_ID,
    );
    if (!res) return;
    this.setState({ currentHistoryRate: res });
  };

  componentDidMount() {
    rangeNumberObservable.subscribe(this.controlToast);
  }

  componentDidUpdate(
    _prevProps: Readonly<TimelineProps>,
    prevState: Readonly<TimelineState>,
  ) {
    if (prevState.selectedCurrencyId !== this.state.selectedCurrencyId) {
      this.updateHistoryRate().catch(console.error);
    }
  }

  componentWillUnmount() {
    rangeNumberObservable.unsubscribe(this.controlToast);
  }

  render() {
    const {
      isToastOpen,
      selectedCurrencyId,
      selectedDays,
      currentHistoryRate,
    } = this.state;
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
              <Input
                type="number"
                value={selectedDays}
                onChange={this.updateSelectedDays}
                max={31}
              />
            </div>
            {currentHistoryRate === undefined ? (
              <Loader />
            ) : (
              <TimelineChartGraph
                data={currentHistoryRate}
                limit={selectedDays}
              />
            )}
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
