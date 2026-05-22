/**
 * ProgressBar — Thin progress bar for Deal DNA scores.
 */

export default function ProgressBar({ value = 0, color = "var(--cyan)" }) {
  return (
    <div className="progress-track mt-1">
      <div
        className="progress-fill"
        style={{ width: `${value}%`, background: color }}
      />
    </div>
  );
}
