import { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!form.firstName) err.firstName = "First name is required";
    if (!form.lastName) err.lastName = "Last name is required";

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email format";
    }

    if (!form.password) err.password = "Password is required";
    if (form.password !== form.confirmPassword) {
      err.confirmPassword = "Passwords do not match";
    }

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Registration successful!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
        <p>{errors.firstName}</p>

        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
        <p>{errors.lastName}</p>

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <p>{errors.email}</p>

        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <p>{errors.password}</p>

        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
        <p>{errors.confirmPassword}</p>

        <button type="submit">Register</button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
export default RegistrationForm;