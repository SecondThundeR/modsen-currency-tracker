import React from "react";
import Map from "react-map-gl";

import CurrencySearch from "../form/CurrencySearch";
import styles from "./BankMap.module.css";

interface BankMapProps {}

interface BankMapState {
  selectedCurrency: string | undefined;
}

class BankMap extends React.Component<BankMapProps, BankMapState> {
  state = { selectedCurrency: undefined };

  handleSelectedCurrency = (currency: string) => {
    this.setState({ selectedCurrency: currency });
  };

  render() {
    const { selectedCurrency } = this.state;
    return (
      <div className={styles["BankMap"]}>
        <div className={styles["BankMap__ControlsWrapper"]}>
          <h1>Search currency in the bank</h1>
          <CurrencySearch setSelectedCurrency={this.handleSelectedCurrency} />
        </div>
        {selectedCurrency && <h1>Searching for {selectedCurrency}</h1>}
        <Map
          mapboxAccessToken={process.env.MAPBOX_KEY}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ height: 460 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    );
  }
}

export default BankMap;
