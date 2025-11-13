"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { IChartItem } from "./typesforChartItem";
// import { SeriesValueFormatter } from '@mui/x-charts';

interface PieChartComponentProps {
  data: IChartItem[];
  height?: number;
  width?: number;
}

export default function PieChartComponent({
  data,
  height = 300,
  width = 300,
}: PieChartComponentProps) {
  const valueFormatter = ({ value }: { value: number }) => `${value}%`;
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          valueFormatter,
        },
      ]}
      height={height}
      width={width}
    />
  );
}
