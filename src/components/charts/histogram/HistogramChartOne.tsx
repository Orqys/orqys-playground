"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function HistogramChartOne() {
  const options: ApexOptions = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 320,
      toolbar: { show: false },
    },
    colors: ["#465FFF"],
    plotOptions: {
      bar: {
        columnWidth: "95%",
        borderRadius: 3,
        distributed: true,
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: [
        "0-10",
        "10-20",
        "20-30",
        "30-40",
        "40-50",
        "50-60",
        "60-70",
        "70-80",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      title: { text: "Value range" },
    },
    yaxis: {
      title: { text: "Frequency" },
      labels: {
        style: { colors: ["#6B7280"], fontSize: "12px" },
      },
    },
    grid: {
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },
    tooltip: {
      y: { formatter: (val: number) => `${val} samples` },
    },
  };

  const series = [
    {
      name: "Frequency",
      data: [4, 9, 13, 21, 17, 11, 7, 3],
    },
  ];

  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div id="chartHistogram" className="min-w-[760px]">
        <ReactApexChart options={options} series={series} type="bar" height={320} />
      </div>
    </div>
  );
}
