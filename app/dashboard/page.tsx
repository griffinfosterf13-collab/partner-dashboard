export default function Dashboard() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Partner Dashboard</h1>
      <ul>
        <li><a href="/dashboard/assets">Assets</a></li>
        <li><a href="/dashboard/invoices">Invoices</a></li>
        <li><a href="/dashboard/contracts">Contracts</a></li>
        <li><a href="/dashboard/logos">Logos</a></li>
        <li><a href="/dashboard/proof">Proof of Performance</a></li>
        <li><a href="/dashboard/events">Events</a></li>
        <li><a href="/dashboard/contacts">Contacts</a></li>
      </ul>
    </main>
  );
}
