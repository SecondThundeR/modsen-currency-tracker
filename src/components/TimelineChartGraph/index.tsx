import React from "react";
import { ApexOptions } from "apexcharts";
import dayjs from "dayjs";
import Chart from "react-apexcharts";
import { connect } from "react-redux";

import { COLORS } from "@/constants/colors";
import { RootState } from "@/store";
import { extractChartData } from "@/utils/extractChartData";

import { TimelineChartGraphProps } from "./interfaces";
import styles from "./TimelineChartGraph.module.css";

class TimelineChartGraph extends React.PureComponent<TimelineChartGraphProps> {
  constructor(props: TimelineChartGraphProps) {
    super(props);
  }

  render() {
    const { data, limit, currentTheme } = this.props;

    if (data.length === 0)
      return (
        <div className={styles["TimelineChartGraph__NoData"]}>
          <h1>No available data :c</h1>
        </div>
      );

    const seriesData = extractChartData(data, limit);
    const series = [
      {
        name: "candle",
        data: seriesData,
      },
    ] satisfies ApexAxisChartSeries;

    const currentChartColors = COLORS[currentTheme];
    const chartOptions = {
      chart: {
        background: currentChartColors.backgroundColor,
        type: "candlestick",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      theme: {
        mode: currentChartColors.themeName,
      },
      tooltip: {
        enabled: true,
      },
      grid: {
        show: true,
        borderColor: currentChartColors.borderColor,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: "category",
        labels: {
          formatter: (value) => dayjs(value).format("MMM DD HH:mm"),
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        crosshairs: {
          show: true,
        },
      },
    } satisfies ApexOptions;

    return (
      <Chart
        type="candlestick"
        series={series}
        options={chartOptions}
        height={450}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currentTheme: state.theme.currentTheme,
});

export default connect(mapStateToProps)(TimelineChartGraph);
