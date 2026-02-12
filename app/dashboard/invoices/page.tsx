type InvoiceStatus = "Paid" | "Due" | "Processing";

type Invoice = {
  number: string;
  date: string;
  amount: string;
  status: InvoiceStatus;
  notes: string;
};

const invoices: Invoice[] = [
  { number: "INV-001", date: "Jan 05", amount: "$500,000", status: "Paid", notes: "Paid via ACH" },
  { number: "INV-002", date: "Feb 15", amount: "$250,000", status: "Due", notes: "Net 30" },
  { number: "INV-003", date: "Mar 01", amount: "$125,000", status: "Processing", notes: "Pending approval" },
];

function StatusPill({ status }: { status: InvoiceStatus }) {
  if (status === "Paid") return <span className="pill pill-green">Paid</span>;
  if (status === "Due") return <span className="pill pill-red">Due</span>;
  return <span className="pill pill-gray">Processing</span>;
}

export default function InvoicesPage() {
  return (
    <div>
      <h1 className="h1">Invoices</h1>
      <p className="sub">View invoice status and download PDFs.</p>

      <div className="toolbar">
        <div className="toolbar-left">
          <input className="input" placeholder="Search invoices (coming soon)" disabled />
          <select className="select" disabled>
            <option>All statuses (coming soon)</option>
          </select>
        </div>
        <button className="btn" disabled>
          Export (soon)
        </button>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <div className="card-h">Invoices</div>
        <div className="card-b" style={{ padding: 0 }}>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "18%" }}>Invoice</th>
                <th style={{ width: "14%" }}>Date</th>
                <th style={{ width: "16%" }}>Amount</th>
                <th style={{ width: "16%" }}>Status</th>
                <th>Notes</th>
                <th style={{ width: "14%" }}>PDF</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.number}>
                  <td style={{ fontWeight: 700 }}>{inv.number}</td>
                  <td style={{ color: "var(--muted)" }}>{inv.date}</td>
                  <td style={{ fontWeight: 700 }}>{inv.amount}</td>
                  <td>
                    <StatusPill status={inv.status} />
                  </td>
                  <td style={{ color: "var(--muted)" }}>{inv.notes}</td>
                  <td>
                    <button className="btn" disabled>
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ height: 14 }} />

      <div className="grid grid-2">
        <div className="card">
          <div className="card-h">Billing Notes</div>
          <div className="card-b" style={{ color: "var(--muted)" }}>
            Later we’ll connect this to uploaded PDFs in storage (Supabase or S3).
          </div>
        </div>

        <div className="card">
          <div className="card-h">What’s next</div>
          <div className="card-b" style={{ color: "var(--muted)" }}>
            We’ll add partner-level permissions so each partner only sees their invoices.
          </div>
        </div>
      </div>
    </div>
  );
}
