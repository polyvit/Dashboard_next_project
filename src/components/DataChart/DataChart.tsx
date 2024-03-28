"use client";
import { months } from "@/helpers/utils";
import { Chart, registerables } from "chart.js";
import React, { useEffect, useRef } from "react";
import { darkOptions } from "./Themes";

export default function DataChart(props) {
  const { data, options } = props;
  const chartRef = useRef(null);
  const labels = months({ count: 7 });

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...darkOptions,
        },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return <canvas ref={chartRef} />;
}

Chart.register(...registerables);
