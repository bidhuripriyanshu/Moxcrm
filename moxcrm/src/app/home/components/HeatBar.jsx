/**
 * HeatBar — Mini 5-bar visualization showing relationship warmth.
 * Each bar has configurable height, color, and opacity.
 */

export default function HeatBar({ bars = [], label = "", labelColor = "" }) {
  return (
    <div className="flex items-center gap-[6px] mt-1">
      <div className="flex gap-[3px] items-end h-[22px]">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="w-[6px] rounded-t-sm min-h-[3px]"
            style={{
              height: `${bar.height}px`,
              background: bar.color,
              opacity: bar.opacity,
            }}
          />
        ))}
      </div>
      {label && (
        <span className="text-[9px]" style={{ color: labelColor }}>
          {label}
        </span>
      )}
    </div>
  );
}
