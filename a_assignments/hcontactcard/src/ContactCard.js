function ContactCard({ name, email, phone, address }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: "10px",
    backgroundColor: "#f9f9f9"
  },
  name: {
    marginBottom: "10px",
    color: "#333"
  }
};

export default ContactCard;