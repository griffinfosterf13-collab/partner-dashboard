type Asset = {
  name: string;
  category: string;
  date: string;
  status: "Completed" | "Upcoming" | "In Progress";
  notes: string;
};

const assets: Asset[] = [
  {
    name: "LED Ribbon Rotation",
    category: "In-Arena",
    date: "Jan 10",
    status: "Completed",
    notes: "vs. BOS — delivered",
  },
  {
    name: "Halftime Feature",
    category: "In-Arena",
    date: "Mar 12",
    status: "Upcoming",
    notes: "Creative due 3/5",
  },
  {
    name: "Instagram Story Post",
    category: "Social",
    date: "Feb 28",
    status: "In Progress",
    notes: "Draft copy in review",
  },
  {
    name: "Concourse Table Activation",
    category: "Activation",
    date: "Apr 3",
    status: "Upcoming",
    notes: "Staffing + signage needed",
  },
];

function Pill({ status }: { status: Asset["status"] }) {
  if (status === "Completed") return <span className="pill pill-green">Completed</span>;
  if (status === "Upcoming") return <span className="pill pill-yellow">Upcoming</span>;
  return <span className="pill pill-blue">In Progress</span>;
}

export default function AssetsPage() {
  return (
    <div>
      <h1 className="h1">Assets</h1>
      <p className="sub">Track what’s included in your partnership and delivery status.</p>

      <div className="toolbar">
        <div className="toolbar-left">
          <input className="input" placeholder="Search assets (coming soon)" disabled />
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
        <div className="card-h">Asset Delivery</div>
        <div className="card-b" style={{ padding: 0 }}>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "32%" }}>Asset</th>
                <th style={{ width: "16%" }}>Category</th>
                <th style={{ width: "14%" }}>Date</th>
                <th style={{ width: "16%" }}>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((a) => (
                <tr key={a.name}>
                  <td style={{ fontWeight: 700 }}>{a.name}</td>
                  <td style={{ color: "var(--muted)" }}>{a.category}</td>
                  <td style={{ color: "var(--muted)" }}>{a.date}</td>
                  <td>
                    <Pill status={a.status} />
                  </td>
                  <td style={{ color: "var(--muted)" }}>{a.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ height: 14 }} />

      <div className="grid grid-2">
        <div className="card">
          <div className="card-h">Deli
::contentReference[oaicite:0]{index=0}
