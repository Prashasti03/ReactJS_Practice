import ContactCard from "./ContactCard";

function App() {
  const contacts = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "555-1234",
      address: "123 Maple Street, Springfield"
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "555-5678",
      address: "456 Oak Avenue, Metropolis"
    },
    {
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      phone: "555-8765",
      address: "789 Pine Road, Gotham"
    }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          address={contact.address}
        />
      ))}
    </div>
  );
}

export default App;