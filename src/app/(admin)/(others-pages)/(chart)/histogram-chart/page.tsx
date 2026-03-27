import HistogramChartOne from "@/components/charts/histogram/HistogramChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Histogram Chart | Orqys - Next.js Dashboard Template",
  description:
    "This is Next.js Histogram Chart page for Orqys - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function HistogramChartPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Histogram Chart" />
      <div className="space-y-6">
        <ComponentCard title="Histogram Chart 1">
          <HistogramChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
