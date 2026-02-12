type ContractStatus = "Signed" | "Draft" | "Expired";

type Contract = {
  title: string;
  version: string;
  status: ContractStatus;
  effective: string;
  expires: string;
  notes: string;
};

const contracts: Contract[] = [
  {
    title: "Master Partnership Agreement",
    version: "v1",
    status: "Signed",
    effective: "Jul 1, 2025",
    expires: "Jun 30, 2026",
    notes: "Executed copy",
  },
  {
    title: "Amendment #1",
    version: "v1",
    status: "Signed",
    effective: "Aug 15, 2025",
    expires: "Jun 30, 2026",
    notes: "Updated deliverables",
  },
  {
    title: "Renewal Draft",
    version: "v0.3",
    status: "Draft",
    effective: "—",
    expires: "—",
    notes: "Internal review",
  },
];

function StatusPill({ status }: { status: ContractStatus }) {
  if (status === "Signed") return <span className="pill pill-green">Signed</span>;
  if (status === "Draft") return <span className="pill pill-blue">Draft</span>;
  return <span className="pill pill-gray">Expired</span>;
}

export default function ContractsPage() {
  return (
    <div>
      <h1 className="h1">Contracts</h1>
      <p className="sub">Access signed agreements and amendments.</p>

      <div className="toolbar">
        <div className="toolbar-left">
          <input className="input" placeholder="Search contracts (coming soon)" disabled />
          <select className="select" disabled>
            <option>All statuses (coming soon)</option>
          </select>
        </div>
        <button className="btn" disabled>
          Upload (admin)
        </button>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <div className="card-h">Documents</div>
        <div className="card-b" style={{ padding: 0 }}>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "32%" }}>Document</th>
                <th style={{ width: "10%" }}>Version</th>
                <th style={{ width: "14%" }}>Status</th>
                <th style={{ width: "14%" }}>Effective</th>
                <th style={{ width: "14%" }}>Expires</th>
                <th>Notes</th>
                <th style={{ width: "14%" }}>PDF</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c) => (
                <tr key={c.title + c.version}>
                  <td style={{ fontWeight: 700 }}>{c.title}</td>
                  <td style={{ color: "var(--muted)" }}>{c.version}</td>
                  <td>
                    <StatusPill status={c.status} />
                  </td>
                  <td style={{ color: "var(--muted)" }}>{c.effective}</td>
                  <td style={{ color: "var(--muted)" }}>{c.expires}</td>
                  <td style={{ color: "var(--muted)" }}>{c.notes}</td>
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
          <div className="card-h">How this will work</div>
          <div className="card-b" style={{ color: "var(--muted)" }}>
            Later we’ll connect the “Download” button to PDFs stored in Supabase Storage (or S3),
            and lock access by partner.
          </div>
        </div>

        <div className="card">
          <div className="card-h">Admin workflow</div>
          <div className="card-b" style={{ color: "var(--muted)" }}>
            Your team will upload contracts/amendments and tag them to a partner so the right people see the right docs.
          </div>
        </div>
      </div>
    </div>
  );
}
