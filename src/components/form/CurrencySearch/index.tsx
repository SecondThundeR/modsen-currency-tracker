import React, { ChangeEventHandler, FocusEventHandler } from "react";

import Input from "@/components/form/Input";
import CurrencySearchDropdown from "@/components/ui/CurrencySearchDropdown";

import styles from "./CurrencySearch.module.css";
import { CurrencySearchProps, CurrencySearchState } from "./interfaces";

class CurrencySearch extends React.PureComponent<
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
      <div data-cy="currency-search" className={styles["CurrencySearch"]}>
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
