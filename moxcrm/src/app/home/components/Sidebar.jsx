/**
 * Sidebar — Navigation panel with search, section groups, and nav items.
 * Second column (228px) of the 3-column app layout.
 */

const NavItem = ({ icon, label, badge, badgeVariant = "cyan", active = false }) => (
  <div
    className={`
      flex items-center gap-2 py-[7px] px-[13px] text-[12px] font-medium
      cursor-pointer transition-all duration-[120ms]
      ${active
        ? "text-[var(--t0)] font-semibold"
        : "text-[var(--t2)] hover:text-[var(--t1)] hover:bg-[rgba(255,255,255,0.025)]"
      }
    `}
    style={{
      borderLeft: active ? "2px solid var(--cyan)" : "2px solid transparent",
      background: active ? "rgba(56,189,248,0.07)" : undefined,
    }}
  >
    <span
      className="w-[14px] h-[14px] flex-shrink-0"
      style={{ color: active ? "var(--cyan)" : "inherit" }}
    >
      {icon}
    </span>
    {label}
    {badge && (
      <span
        className={
          badgeVariant === "green" ? "nav-badge-green" : "nav-badge"
        }
        style={
          badgeVariant === "gold"
            ? { background: "var(--gol)", color: "var(--gold)" }
            : {}
        }
      >
        {badge}
      </span>
    )}
  </div>
);

const SectionLabel = ({ children }) => (
  <div className="section-label px-[13px] pt-[11px] pb-1">{children}</div>
);

export default function Sidebar() {
  return (
    <aside
      className="flex flex-col overflow-hidden"
      style={{
        background: "var(--navy2)",
        borderRight: "1px solid var(--b)",
      }}
    >
      {/* Header */}
      <div className="px-[13px] pt-[13px] pb-[9px]" style={{ borderBottom: "1px solid var(--b)" }}>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-[9px]">
          <div
            className="w-6 h-6 rounded-[6px] flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, var(--cyan), var(--indigo))" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
          </div>
          <div className="text-[13px] font-extrabold tracking-tight text-[var(--t0)]">
            MOX<span className="text-cyan">CRM</span>
          </div>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-[6px] rounded-[7px] py-[6px] px-[10px] text-[11px] text-[var(--t3)]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--b)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search everything…
        </div>
      </div>

      {/* Pipeline section */}
      <SectionLabel>Pipeline</SectionLabel>

      <NavItem
        active
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        }
        label="All Deals"
        badge="16"
      />

      <NavItem
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        }
        label="Hot Signals"
        badge="5"
        badgeVariant="green"
      />

      <NavItem
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        }
        label="Closing Soon"
      />

      <NavItem
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        }
        label="Deal DNA"
      />

      {/* Source section */}
      <SectionLabel>Source</SectionLabel>

      <NavItem
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <polyline points="22 2 11 13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        }
        label="From Moxsend"
      />

      <NavItem
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        }
        label="All Contacts"
      />

      {/* Intelligence section */}
      <SectionLabel>Intelligence</SectionLabel>

      <NavItem
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10z" />
          </svg>
        }
        label="GCC Intelligence"
        badge="3"
        badgeVariant="gold"
      />

      <NavItem
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M3 18v-6a9 9 0 0118 0v6" />
          </svg>
        }
        label="Heat Map"
      />

      <NavItem
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        }
        label="Conv. Memory"
      />
    </aside>
  );
}
