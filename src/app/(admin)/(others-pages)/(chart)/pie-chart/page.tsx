import PieChartOne from "@/components/charts/pie/PieChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Pie Chart | Orqys - Next.js Dashboard Template",
  description:
    "This is Next.js Pie Chart page for Orqys - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function PieChartPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Pie Chart" />
      <div className="space-y-6">
        <ComponentCard title="Pie Chart 1">
          <PieChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
