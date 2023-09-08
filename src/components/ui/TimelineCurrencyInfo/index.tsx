import React from "react";

import Icon from "@/components/ui/Icon";
import { CurrencyType } from "@/types/currency";

import styles from "./TimelineCurrencyInfo.module.css";

interface TimelineCurrencyInfoProps
  extends Pick<CurrencyType, "id" | "name" | "iconSrc"> {}

class TimelineCurrencyInfo extends React.Component<TimelineCurrencyInfoProps> {
  render() {
    const { id, name, iconSrc } = this.props;
    return (
      <div className={styles["TimelineCurrencyInfo"]}>
        <Icon width={48} height={48} iconSrc={iconSrc} />
        <div className={styles["TimelineCurrencyInfo__Details"]}>
          <h1>{name}</h1>
          <p>{id}</p>
        </div>
      </div>
    );
  }
}

export default TimelineCurrencyInfo;