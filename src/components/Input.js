function Input({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", marginBottom: "0.25rem" }}>
        {label}:
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: "0.5rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "100%",
        }}
      />
    </div>
  );
}

export default Input;
