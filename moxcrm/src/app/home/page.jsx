"use client";

/**
 * /home — Deals Dashboard (Screen 01: Silent CRM · All Deals)
 * 3-column layout: Rail | Sidebar | Main content area
 */

import Rail from "./components/Rail";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import AutoBanner from "./components/AutoBanner";
import DealsTable from "./components/DealsTable";
import { DEALS, PIPELINE_SUMMARY } from "./data/deals";

export default function DealsPage() {
  return (
    <div
      className="h-screen grid overflow-hidden"
      style={{
        gridTemplateColumns: "52px 228px 1fr",
        background: "var(--navy)",
      }}
    >
      {/* Left rail */}
      <Rail />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex flex-col overflow-hidden" style={{ background: "var(--navy)" }}>
        <TopBar />
        <div
          className="flex-1 overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.07) transparent",
          }}
        >
          <AutoBanner />
          <DealsTable deals={DEALS} summary={PIPELINE_SUMMARY} />
        </div>
      </main>
    </div>
  );
}
