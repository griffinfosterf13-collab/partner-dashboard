export default function LogosPage() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>Logos & Brand Files</h1>
      <p style={{ color: "#555" }}>
        Download approved logos, brand guidelines, and templates.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 16 }}>
        {["Primary Logo", "Wordmark", "Brand Guide (PDF)", "Social Template"].map((item) => (
          <div key={item} style={{ border: "1px solid #e5e5e5", borderRadius: 8, padding: 12, background: "#fff" }}>
            <div style={{ fontWeight: 600 }}>{item}</div>
            <div style={{ fontSize: 14, color: "#555", marginTop: 6 }}>
              File will be available here.
            </div>
            <button
              style={{
                marginTop: 10,
                padding: "8px 10px",
                borderRadius: 6,
                border: "1px solid #ddd",
                background: "#f7f7f7",
                cursor: "not-allowed",
              }}
              disabled
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
