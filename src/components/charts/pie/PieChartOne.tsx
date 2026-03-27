"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function PieChartOne() {
  const options: ApexOptions = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "pie",
      toolbar: {
        show: false,
      },
    },
    labels: ["Product", "Services", "Subscriptions", "Licenses"],
    colors: ["#465FFF", "#9CB9FF", "#22C55E", "#F59E0B"],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontWeight: "500",
      },
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Outfit, sans-serif",
      labels: {
        colors: "#6B7280",
      },
    },
    stroke: {
      show: true,
      colors: ["#ffffff"],
      width: 2,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`,
      },
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [36, 24, 28, 12];

  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div id="chartPie" className="min-w-[320px]">
        <ReactApexChart options={options} series={series} type="pie" height={320} />
      </div>
    </div>
  );
}
