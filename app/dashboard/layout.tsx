export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 240,
          padding: 20,
          borderRight: "1px solid #e5e5e5",
          background: "#fafafa",
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: 16 }}>
          Partner Portal
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a href="/dashboard">Dashboard</a>
          <a href="/dashboard/assets">Assets</a>
          <a href="/dashboard/invoices">Invoices</a>
          <a href="/dashboard/contracts">Contracts</a>
          <a href="/dashboard/logos">Logos</a>
          <a href="/dashboard/proof">Proof of Performance</a>
          <a href="/dashboard/events">Events</a>
          <a href="/dashboard/contacts">Contacts</a>
        </nav>

        <div style={{ marginTop: 24 }}>
          <a href="/">← Back Home</a>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1 }}>
        {/* Top bar */}
        <header
          style={{
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            borderBottom: "1px solid #e5e5e5",
            background: "#fff",
          }}
        >
          <div style={{ fontWeight: 600 }}>Cavaliers Corporate Partners</div>
          <div style={{ fontSize: 14, color: "#555" }}>Season: 2025–26</div>
        </header>

        {/* Page content */}
        <main style={{ padding: 20 }}>{children}</main>
      </div>
    </div>
  );
}
