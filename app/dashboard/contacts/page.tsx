export default function ContactsPage() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>Contacts</h1>
      <p style={{ color: "#555" }}>
        Your Cavaliers partnership contacts.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 16 }}>
        {[
          { title: "Account Manager", name: "John Smith", email: "john@cavs.com", phone: "(216) 555-1234" },
          { title: "Marketing Ops", name: "Jane Doe", email: "jane@cavs.com", phone: "(216) 555-5678" },
        ].map((c) => (
          <div key={c.title} style={{ border: "1px solid #e5e5e5", borderRadius: 8, padding: 12, background: "#fff" }}>
            <div style={{ fontWeight: 700 }}>{c.title}</div>
            <div style={{ marginTop: 8, fontWeight: 600 }}>{c.name}</div>
            <div style={{ fontSize: 14, color: "#555", marginTop: 4 }}>{c.email}</div>
            <div style={{ fontSize: 14, color: "#555", marginTop: 2 }}>{c.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
