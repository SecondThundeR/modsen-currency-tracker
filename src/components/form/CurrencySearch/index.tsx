import React, { ChangeEventHandler, FocusEventHandler } from "react";

import { SelectedCurrency } from "@/components/BankMap";
import Input from "@/components/form/Input";
import CurrencySearchDropdown from "@/components/ui/CurrencySearchDropdown";

import styles from "./CurrencySearch.module.css";

interface CurrencySearchProps {
  setSelectedCurrency: (currency: SelectedCurrency) => void;
}

interface CurrencySearchState {
  value: string;
  isFocused: boolean;
}

class CurrencySearch extends React.Component<
  CurrencySearchProps,
  CurrencySearchState
> {
  state = { value: "", isFocused: false };

  onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ value: event.currentTarget.value });
  };

  onFocus: FocusEventHandler<HTMLInputElement> = () => {
    this.setState({ isFocused: true });
  };

  handleSetSelectedCurrency = (currency: { id: string; name: string }) => {
    this.setState({ value: "", isFocused: false });
    this.props.setSelectedCurrency(currency);
  };

  render() {
    const { value, isFocused } = this.state;
    return (
      <div className={styles["CurrencySearch"]}>
        <Input
          placeholder="Currency search..."
          value={value}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        {isFocused && (
          <CurrencySearchDropdown
            value={value}
            setSelectedCurrency={this.handleSetSelectedCurrency}
          />
        )}
      </div>
    );
  }
}

export default CurrencySearch;
