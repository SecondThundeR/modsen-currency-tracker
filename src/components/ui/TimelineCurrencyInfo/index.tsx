import React from "react";

import Icon from "@/components/ui/Icon";

import { TimelineCurrencyInfoProps } from "./interfaces";
import styles from "./TimelineCurrencyInfo.module.css";

class TimelineCurrencyInfo extends React.PureComponent<TimelineCurrencyInfoProps> {
  render() {
    const { id, name, iconSrc } = this.props;
    return (
      <div
        data-testid="timeline-currency-info"
        className={styles["TimelineCurrencyInfo"]}
      >
        <Icon width={48} height={48} src={iconSrc} title={name} alt={name} />
        <div className={styles["TimelineCurrencyInfo__Details"]}>
          <h1>{name}</h1>
          <p>{id}</p>
        </div>
      </div>
    );
  }
}

export default TimelineCurrencyInfo;
