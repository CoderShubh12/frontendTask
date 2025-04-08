function Table({ headers = [], data = [], renderRow }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "8px" }}>
      <table
        style={{
          width: "100%",
          minWidth: "500px", // ensures scroll on small screens
          borderCollapse: "collapse",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#1b5e20", color: "white" }}>
          <tr>
            {headers.map((header, index) => (
              <th key={index} style={thStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => renderRow(item, index))
          ) : (
            <tr>
              <td colSpan={headers.length} style={tdStyle}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  textAlign: "center",
};

export default Table;
