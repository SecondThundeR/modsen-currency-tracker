import React from "react";
import { Marker } from "react-map-gl";

import Pin from "@/components/map/Pin";
import { EnhancedPlaceDetails, EnhancedPlaceFeature } from "@/types/place";

interface BankMarkersProps {
  banksData: EnhancedPlaceDetails;
  setPopupInfo: (selectedBank: EnhancedPlaceFeature) => void;
}

class BankMarkers extends React.Component<BankMarkersProps> {
  render() {
    const { banksData, setPopupInfo } = this.props;
    const { features } = banksData;
    return (
      <>
        {features.map((bank, index) => (
          <Marker
            key={`marker-${index}`}
            longitude={bank.properties.lon}
            latitude={bank.properties.lat}
            anchor="top"
            onClick={(event) => {
              event.originalEvent.stopPropagation();
              setPopupInfo(bank);
            }}
          >
            <Pin />
          </Marker>
        ))}
      </>
    );
  }
}

export default BankMarkers;
