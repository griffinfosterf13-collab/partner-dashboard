export default function Dashboard() {
  return (
    <div>
      <h1 className="h1">Partner Dashboard</h1>
      <p className="sub">Overview of your partnership, documents, and upcoming activity.</p>

      <div style={{ height: 14 }} />

      <div className="grid grid-3">
        <div className="card">
          <div className="card-h">Contract</div>
          <div className="card-b">
            <div style={{ fontWeight: 700, fontSize: 18 }}>$2,500,000</div>
            <div style={{ color: "var(--muted)", marginTop: 6 }}>Partnership value</div>
          </div>
        </div>

        <div className="card">
          <div className="card-h">Assets</div>
          <div className="card-b">
            <div style={{ fontWeight: 700, fontSize: 18 }}>12 / 30</div>
            <div style={{ color: "var(--muted)", marginTop: 6 }}>Delivered this season</div>
          </div>
        </div>

        <div className="card">
          <div className="card-h">Next Event</div>
          <div className="card-b">
            <div style={{ fontWeight: 700 }}>Partner Summit</div>
            <div style={{ color: "var(--muted)", marginTop: 6 }}>March 14</div>
            <div style={{ marginTop: 10 }}>
              <button className="btn" disabled>
                RSVP (soon)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <div className="card-h">Quick Links</div>
        <div className="card-b">
          <div className="grid grid-3">
            <a className="btn" href="/dashboard/invoices">Invoices</a>
            <a className="btn" href="/dashboard/contracts">Contracts</a>
            <a className="btn" href="/dashboard/proof">Proof of Performance</a>
          </div>
        </div>
      </div>
    </div>
  );
}
