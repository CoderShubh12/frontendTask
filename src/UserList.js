import Table from "./components/Table";

// UserList.js
function UserList({ users }) {
  const headers = ["#", "Name", "Email", "Phone"];

  const renderRow = (user, index) => (
    <tr key={user._id} style={{ textAlign: "center" }}>
      <td style={tdStyle}>{index + 1}</td>
      <td style={tdStyle}>{user.name}</td>
      <td style={tdStyle}>{user.email}</td>
      <td style={tdStyle}>{user.phone}</td>
    </tr>
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Submitted Users</h2>
      {users.length === 0 ? (
        <p>No users submitted yet.</p>
      ) : (
        <Table headers={headers} data={users} renderRow={renderRow} />
      )}
    </div>
  );
}

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

export default UserList;
