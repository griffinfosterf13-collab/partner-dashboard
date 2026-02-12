export default function InvoicesPage() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>Invoices</h1>
      <p style={{ color: "#555" }}>
        Download invoices and check payment status.
      </p>

      <div style={{ marginTop: 16, border: "1px solid #e5e5e5", borderRadius: 8, overflow: "hidden" }}>
        <div style={{ padding: 12, background: "#fafafa", borderBottom: "1px solid #e5e5e5", fontWeight: 600 }}>
          Coming soon
        </div>
        <div style={{ padding: 12 }}>
          This page will show invoice number, amount, status, and a PDF download link.
        </div>
      </div>
    </div>
  );
}
