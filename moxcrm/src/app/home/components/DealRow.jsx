/**
 * DealRow — Single row in the deals table.
 * 6 columns: Contact·Company | Source·Heat | Deal DNA | Value | Stage | Next Action
 */

import HeatBar from "./HeatBar";
import ProgressBar from "./ProgressBar";

/** Maps stage variant names to tag utility classes */
const STAGE_TAG_MAP = {
  green: "tag-green",
  yellow: "tag-yellow",
  rose: "tag-rose",
  cyan: "tag-cyan",
  indigo: "tag-indigo",
  violet: "tag-violet",
  gold: "tag-gold",
  neutral: "tag-neutral",
};

export default function DealRow({ deal }) {
  const tagClass = STAGE_TAG_MAP[deal.stageVariant] || "tag-neutral";

  return (
    <div
      className="grid gap-2 py-[11px] px-[18px] items-center cursor-pointer transition-colors duration-[120ms] hover:bg-[rgba(255,255,255,0.02)]"
      style={{
        gridTemplateColumns: "minmax(0, 1.7fr) 110px 90px 110px 80px 120px",
        borderBottom: "1px solid var(--b)",
        borderLeft: `3px solid ${deal.borderColor}`,
        opacity: deal.rowOpacity || 1,
        background: deal.isReferral ? "rgba(56,189,248,0.025)" : undefined,
      }}
    >
      {/* Col 1: Contact · Company */}
      <div className="flex items-center gap-[9px]">
        <div
          className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
          style={{
            background: deal.avatarGradient,
            color: "var(--t1)",
          }}
        >
          {deal.initials}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-[6px]">
            <span className="text-[13px] font-semibold text-[var(--t0)] truncate">
              {deal.name}
            </span>
            {deal.badges?.map((badge, i) => (
              <span
                key={i}
                className="text-[8.5px] font-bold py-[1px] px-[6px] rounded-full tracking-wide whitespace-nowrap"
                style={{
                  background: badge.bg,
                  color: badge.color,
                  letterSpacing: "0.06em",
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>
          {deal.subtitle ? (
            <div
              className="text-[11px]"
              style={{ color: deal.subtitleColor || "var(--t3)" }}
            >
              {deal.subtitle}
            </div>
          ) : (
            deal.company && (
              <div className="text-[11px] text-[var(--t3)] truncate">
                {deal.company} · {deal.location}
              </div>
            )
          )}
        </div>
      </div>

      {/* Col 2: Source · Heat */}
      <div>
        <span className="tag-cyan" style={{ fontSize: "9px" }}>
          {deal.source}
        </span>
        {deal.heatBars.length > 0 ? (
          <HeatBar
            bars={deal.heatBars}
            label={deal.heatLabel}
            labelColor={deal.heatColor}
          />
        ) : (
          <div className="text-[10px] mt-[3px]" style={{ color: deal.heatColor }}>
            {deal.heatLabel}
          </div>
        )}
      </div>

      {/* Col 3: Deal DNA */}
      <div>
        <div
          className="text-[16px] font-extrabold tracking-tight"
          style={{ color: deal.dnaColor }}
        >
          {deal.dnaScore}%
        </div>
        <ProgressBar value={deal.dnaScore} color={deal.dnaColor} />
      </div>

      {/* Col 4: Value */}
      <div className="text-[13px] font-bold text-[var(--t0)]">
        {deal.value}
        <div className="text-[10px] text-[var(--t3)] font-normal">
          {deal.valueNote}
        </div>
      </div>

      {/* Col 5: Stage */}
      <div>
        <span className={tagClass}>{deal.stage}</span>
      </div>

      {/* Col 6: Next Action */}
      <div
        className="text-[11.5px] font-medium"
        style={{ color: deal.nextActionColor }}
      >
        {deal.nextAction}
      </div>
    </div>
  );
}
