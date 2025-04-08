function Table({ headers = [], data = [], renderRow }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
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
  );
}

const thStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  textAlign: "center",
};

export default Table;
