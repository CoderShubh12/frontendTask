import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import UserList from "./UserList";

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [refresh, setRefresh] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/form/data");
      const data = await res.json();

      if (!res.ok) {
        setFetchError(data.error || "Failed to fetch users");
      } else {
        setUsers(data);
      }
    } catch (err) {
      setFetchError("Server not reachable");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [refresh]);

  const handleUserAdded = () => {
    fetchUsers();
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#2e7d32",
            fontSize: "2rem",
            letterSpacing: "1px",
          }}
        >
          📋 User Contact Data Form
        </h1>

        <ContactForm
          onUserAdded={handleUserAdded}
          setRefresh={setRefresh}
          refresh={refresh}
        />

        {fetchError && (
          <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>
            {fetchError}
          </p>
        )}

        <UserList users={users} />
      </div>
    </div>
  );
}

export default UserDashboard;
