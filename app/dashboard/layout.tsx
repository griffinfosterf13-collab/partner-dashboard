export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">Cavs Partner Portal</div>

        <div className="badge">Season: 2025–26</div>

        <nav className="nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/dashboard/assets">Assets</a>
          <a href="/dashboard/invoices">Invoices</a>
          <a href="/dashboard/contracts">Contracts</a>
          <a href="/dashboard/logos">Logos</a>
          <a href="/dashboard/proof">Proof of Performance</a>
          <a href="/dashboard/events">Events</a>
          <a href="/dashboard/contacts">Contacts</a>
        </nav>

        <div style={{ marginTop: 16 }}>
          <a href="/">← Back Home</a>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <div className="topbar-title">Cavaliers Corporate Partners</div>
          <div className="topbar-meta">Private Portal</div>
        </header>

        <main className="page">{children}</main>
      </div>
    </div>
  );
}
