import React from "react";
import { Popup } from "react-map-gl";

import { BankPopupProps } from "./interfaces";

class BankPopup extends React.PureComponent<BankPopupProps> {
  render() {
    const { bankDetails, resetPopupInfo } = this.props;
    const { properties, availableCurrencies } = bankDetails;
    return (
      <Popup
        anchor="bottom"
        longitude={properties.lon}
        latitude={properties.lat}
        onClose={resetPopupInfo}
      >
        <div>
          <p>
            {properties.name} ({properties.address_line2})
          </p>
          <p>Available currencies: {availableCurrencies.join(", ")}</p>
        </div>
      </Popup>
    );
  }
}

export default BankPopup;
