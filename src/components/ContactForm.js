import { useState } from "react";
import Input from "./Input";

function ContactForm({ onUserAdded, setRefresh, refresh }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email) return "Email is required";
    else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    )
      return "Invalid email format";

    if (!formData.phone) return "Phone is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      return "Phone must be exactly 10 digits";

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    try {
      const res = await fetch(
        "https://taskoraiyan.onrender.com/api/form/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Submission failed");
        return;
      }

      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "" });
      if (onUserAdded) onUserAdded();
    } catch {
      setError("Server not reachable");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
        margin: "1rem auto",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          fontSize: "1.5rem",
        }}
      >
        Contact Form
      </h2>

      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <Input
        label="Phone"
        name="phone"
        type="tel"
        maxLength={10}
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
      />

      {error && (
        <p
          style={{
            color: "red",
            marginBottom: "1rem",
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "0.75rem",
          backgroundColor: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
