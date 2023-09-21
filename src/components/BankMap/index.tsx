import React from "react";
import Map from "react-map-gl";

import CurrencySearch from "@/components/form/CurrencySearch";
import BankMarkers from "@/components/map/BankMarkers";
import BankPopup from "@/components/map/BankPopup";
import Alert from "@/components/ui/Alert";
import { MAP_DEFAULT_INITIAL_STATE } from "@/constants/mapDefaultInitialState";
import { getBanksData } from "@/features/geoapify/getBanksData";
import { EnhancedPlaceDetails, EnhancedPlaceFeature } from "@/types/place";
import { assignRandomBankCurrencies } from "@/utils/assignRandomBankCurrencies";
import { extractRandomBanks } from "@/utils/extractRandomBanks";

import styles from "./BankMap.module.css";
import { BankMapProps, BankMapState, SelectedCurrency } from "./interfaces";

class BankMap extends React.Component<BankMapProps, BankMapState> {
  state: BankMapState = {
    selectedCurrency: undefined,
    banksData: undefined,
    selectedBank: null,
    isLoading: false,
    isError: false,
  };

  handleSelectedCurrency = (currency: SelectedCurrency) => {
    this.setState({ selectedCurrency: currency });
  };

  setLoadingState = () => {
    this.setState({ isLoading: true, isError: false });
  };

  setErrorState = () => {
    this.setState({ isLoading: false, isError: true });
  };

  setBanksData = (data: EnhancedPlaceDetails) => {
    this.setState({
      banksData: data,
      selectedBank: null,
      isLoading: false,
      isError: false,
    });
  };

  handlePinClick = (data: EnhancedPlaceFeature) => {
    this.setState({ selectedBank: data });
  };

  handlePopupReset = () => {
    this.setState({ selectedBank: null });
  };

  updateBanksData = async (selectedCurrency: SelectedCurrency) => {
    this.setLoadingState();

    const res = await getBanksData();
    if (!res) return this.setErrorState();

    const extractedRandomBanks = extractRandomBanks(res);
    const assignedBanksCurrencies = assignRandomBankCurrencies(
      extractedRandomBanks,
      selectedCurrency.id,
    );
    this.setBanksData(assignedBanksCurrencies);
  };

  componentDidUpdate(
    _prevProps: Readonly<BankMapProps>,
    prevState: Readonly<BankMapState>,
  ) {
    if (!this.state.selectedCurrency) return;

    if (prevState.selectedCurrency !== this.state.selectedCurrency) {
      this.updateBanksData(this.state.selectedCurrency).catch(console.error);
    }
  }

  render() {
    const { selectedCurrency, banksData, selectedBank, isLoading, isError } =
      this.state;
    return (
      <div className={styles["BankMap"]}>
        <div className={styles["BankMap__ControlsWrapper"]}>
          {isLoading && <Alert type="success">Loading results...</Alert>}
          {isError && (
            <Alert type="error">
              Something went wrong! Please, try again or contact customer
              support for assistance
            </Alert>
          )}
          <h1>Search currency in the bank</h1>
          {selectedCurrency && <p>Selected: {selectedCurrency.name}</p>}
          <CurrencySearch setSelectedCurrency={this.handleSelectedCurrency} />
        </div>
        <Map
          mapboxAccessToken={process.env.MAPBOX_KEY}
          initialViewState={MAP_DEFAULT_INITIAL_STATE}
          style={{ height: 460 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {banksData && (
            <BankMarkers
              banksData={banksData}
              setPopupInfo={this.handlePinClick}
            />
          )}
          {selectedBank && (
            <BankPopup
              bankDetails={selectedBank}
              resetPopupInfo={this.handlePopupReset}
            />
          )}
        </Map>
      </div>
    );
  }
}

export default BankMap;
