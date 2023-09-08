import React from "react";
import { ApexOptions } from "apexcharts";
import dayjs from "dayjs";
import Chart from "react-apexcharts";

import { RateHistory } from "@/types/coinapi";
import { extractChartData } from "@/utils/extractChartData";

const CHART_OPTIONS = {
  chart: {
    background: "#000000",
    type: "candlestick",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  theme: {
    mode: "dark",
  },
  tooltip: {
    enabled: true,
  },
  grid: {
    show: true,
    borderColor: "#1C1C1D",
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
      formatter: function (val) {
        return dayjs(val).format("MMM DD HH:mm");
      },
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

interface TimelineChartGraphProps {
  data: RateHistory[];
  limit: number;
}

interface TimelineChartGraphState {
  options: ApexOptions;
}

class TimelineChartGraph extends React.Component<
  TimelineChartGraphProps,
  TimelineChartGraphState
> {
  constructor(props: TimelineChartGraphProps) {
    super(props);
    this.state = {
      options: CHART_OPTIONS,
    };
  }

  render() {
    const { data, limit } = this.props;
    const { options } = this.state;

    const seriesData = extractChartData(data, limit);

    const series = [
      {
        name: "candle",
        data: seriesData,
      },
    ] satisfies ApexAxisChartSeries;

    return (
      <Chart
        type="candlestick"
        series={series}
        options={options}
        height={450}
      />
    );
  }
}

export default TimelineChartGraph;
