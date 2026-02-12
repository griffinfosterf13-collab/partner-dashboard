export default function EventsPage() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>Events</h1>
      <p style={{ color: "#555" }}>
        Upcoming partner events and RSVPs.
      </p>

      <div style={{ marginTop: 16, border: "1px solid #e5e5e5", borderRadius: 8, overflow: "hidden" }}>
        <div style={{ padding: 12, background: "#fafafa", borderBottom: "1px solid #e5e5e5", fontWeight: 600 }}>
          Sample events
        </div>

        <div style={{ padding: 12, display: "grid", gap: 10 }}>
          {[
            { name: "Partner Summit", date: "March 14", status: "RSVP soon" },
            { name: "Sponsor Golf Outing", date: "April 3", status: "Invite pending" },
          ].map((e) => (
            <div key={e.name} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{e.name}</div>
                  <div style={{ fontSize: 14, color: "#555" }}>{e.date}</div>
                </div>
                <button
                  style={{
                    padding: "8px 10px",
                    borderRadius: 6,
                    border: "1px solid #ddd",
                    background: "#f7f7f7",
                    cursor: "not-allowed",
                  }}
                  disabled
                >
                  RSVP (soon)
                </button>
              </div>
              <div style={{ fontSize: 13, color: "#777", marginTop: 6 }}>{e.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
