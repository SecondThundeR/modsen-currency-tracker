import React from "react";
import Map from "react-map-gl";

import Input from "@/components/form/Input";

import styles from "./BankMap.module.css";

interface BankMapProps {}

interface BankMapState {}

class BankMap extends React.Component<BankMapProps, BankMapState> {
  state = {};
  render() {
    return (
      <div className={styles["BankMap"]}>
        <div className={styles["BankMap__ControlsWrapper"]}>
          <h1>Search currency in the bank</h1>
          <Input placeholder="Search currency" />
        </div>
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
