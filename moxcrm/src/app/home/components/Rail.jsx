/**
 * Rail — Vertical icon navigation (left-most 52px column)
 * Contains app-level navigation icons and user avatar.
 */

const RailIcon = ({ children, active = false }) => (
  <div
    className={`
      w-[34px] h-[34px] rounded-[9px] flex items-center justify-center
      cursor-pointer transition-all duration-150
      ${active
        ? "text-cyan"
        : "text-[var(--t3)] hover:text-[var(--t1)] hover:bg-[rgba(255,255,255,0.05)]"
      }
    `}
    style={active ? { background: "var(--cl)", color: "var(--cyan)" } : {}}
  >
    {children}
  </div>
);

export default function Rail() {
  return (
    <aside
      className="flex flex-col items-center py-[13px] gap-[3px]"
      style={{
        background: "#060E1A",
        borderRight: "1px solid var(--b)",
      }}
    >
      {/* Dashboard */}
      <RailIcon>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      </RailIcon>

      {/* Deals — active */}
      <RailIcon active>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      </RailIcon>

      {/* Signals */}
      <RailIcon>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </RailIcon>

      {/* Chat */}
      <RailIcon>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      </RailIcon>

      {/* Activity */}
      <RailIcon>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      </RailIcon>

      {/* Help */}
      <RailIcon>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        </svg>
      </RailIcon>

      {/* Settings */}
      <RailIcon>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="3" />
        </svg>
      </RailIcon>

      {/* Spacer */}
      <div className="flex-1" />

      {/* User avatar */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-2"
        style={{ background: "linear-gradient(135deg, #6366F1, #A78BFA)" }}
      >
        RC
      </div>
    </aside>
  );
}
