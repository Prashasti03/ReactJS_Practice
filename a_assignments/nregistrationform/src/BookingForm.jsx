import { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: ""
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email";
    }

    if (!form.phone) err.phone = "Phone is required";
    if (!form.date) err.date = "Select date";
    if (!form.time) err.time = "Select time";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setMessage("Appointment booked successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: ""
      });
    }
  };

  return (
    <div>
      <h2>Booking Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <p>{errors.name}</p>

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <p>{errors.email}</p>

        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
        <p>{errors.phone}</p>

        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <p>{errors.date}</p>

        <input type="time" name="time" value={form.time} onChange={handleChange} />
        <p>{errors.time}</p>

        <button type="submit">Book Appointment</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}
export default BookingForm;