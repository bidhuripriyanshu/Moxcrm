/**
 * TopBar — Page header with title, badge, sync indicator, and action buttons.
 */

export default function TopBar({
  title = "All Deals",
  badgeText = "16 deals · auto-populated",
  syncText = "Syncing from Moxsend",
}) {
  return (
    <header
      className="h-12 flex items-center px-[18px] gap-[9px] flex-shrink-0"
      style={{
        borderBottom: "1px solid var(--b)",
        background: "rgba(12,26,46,0.85)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Title */}
      <h1 className="text-[14px] font-bold text-[var(--t0)] tracking-tight m-0">
        {title}
      </h1>

      {/* Badge */}
      <span className="mox-badge">{badgeText}</span>

      {/* Sync status */}
      <div
        className="flex items-center gap-[6px] py-1 px-[10px] rounded-full"
        style={{
          background: "rgba(16,185,129,0.08)",
          border: "1px solid rgba(16,185,129,0.18)",
        }}
      >
        <div className="pulse-dot" style={{ background: "#34D399" }} />
        <span className="text-[11px] font-semibold" style={{ color: "#34D399" }}>
          {syncText}
        </span>
      </div>

      {/* Actions — pushed to right */}
      <div className="ml-auto flex items-center gap-[7px]">
        <button className="btn-ghost">Filter</button>
        <button className="btn-primary">+ Add deal</button>
      </div>
    </header>
  );
}
