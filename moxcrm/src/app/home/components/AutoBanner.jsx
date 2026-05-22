/**
 * AutoBanner — Info banner about auto-created deals from Moxsend.
 */

export default function AutoBanner({
  mainText = "4 new deals auto-created from Moxsend replies in the last 2 hours",
  subText = "2 from referral detection · Zero manual entries",
}) {
  return (
    <div
      className="flex items-center gap-[10px] py-[9px] px-[18px]"
      style={{
        background: "rgba(56,189,248,0.05)",
        borderBottom: "1px solid rgba(56,189,248,0.10)",
      }}
    >
      {/* Trend icon */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="2"
        className="flex-shrink-0"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>

      {/* Main text */}
      <span className="text-[12px]" style={{ color: "var(--cyan)" }}>
        {mainText}
      </span>

      {/* Sub text */}
      <span className="text-[11px] ml-auto" style={{ color: "var(--t3)" }}>
        {subText}
      </span>
    </div>
  );
}
