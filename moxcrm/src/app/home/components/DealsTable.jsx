/**
 * DealsTable — Table header + deal rows + pipeline summary footer.
 */

import DealRow from "./DealRow";

const TABLE_HEADERS = [
  "Contact · Company",
  "Source · Heat",
  "Deal DNA",
  "Value",
  "Stage",
  "Next action",
];

export default function DealsTable({ deals = [], summary = {} }) {
  return (
    <div>
      {/* Table header */}
      <div
        className="grid gap-2 py-2 px-[18px] items-center"
        style={{
          gridTemplateColumns: "minmax(0, 1.7fr) 110px 90px 110px 80px 120px",
          background: "var(--navy3)",
        }}
      >
        {TABLE_HEADERS.map((header) => (
          <span
            key={header}
            className="section-label"
            style={{ letterSpacing: "0.12em" }}
          >
            {header}
          </span>
        ))}
      </div>

      {/* Deal rows */}
      {deals.map((deal) => (
        <DealRow key={deal.id} deal={deal} />
      ))}

      {/* Pipeline summary footer */}
      <div
        className="flex items-center gap-5 py-3 px-[18px]"
        style={{
          background: "rgba(56,189,248,0.04)",
          borderTop: "1px solid rgba(56,189,248,0.10)",
        }}
      >
        <div className="text-[11px] font-semibold text-[var(--t3)]">
          {summary.totalDeals} deals total
        </div>

        <div className="text-[12px] font-bold text-[var(--t0)]">
          Pipeline:{" "}
          <span style={{ color: "var(--cyan)" }}>{summary.pipelineValue}</span>
        </div>

        <div className="flex gap-3 text-[11px] text-[var(--t3)]">
          <span>
            Hot:{" "}
            <strong style={{ color: "#34D399" }}>{summary.hot}</strong>
          </span>
          <span>
            Warm:{" "}
            <strong style={{ color: "#FCD34D" }}>{summary.warm}</strong>
          </span>
          <span>
            Nurture:{" "}
            <strong style={{ color: "var(--violet)" }}>{summary.nurture}</strong>
          </span>
          <span>
            Paused:{" "}
            <strong style={{ color: "var(--gold)" }}>{summary.paused}</strong>
          </span>
        </div>

        <div className="ml-auto text-[11px] text-[var(--t3)]">
          Last synced:{" "}
          <span style={{ color: "#34D399" }}>{summary.lastSynced}</span> ·{" "}
          <strong>Zero manual entries</strong>
        </div>
      </div>
    </div>
  );
}
