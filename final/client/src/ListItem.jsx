export default function ListItem({ text, important, onToggle, onDelete }) {
  return (
    <li className={important ? "important" : ""}>
      <span onClick={onToggle} title="Click to toggle important" style={{ cursor: "pointer" }}>
        {text} {important && <span style={{ marginLeft: "10px" }}>⭐</span>}
      </span>
      <button onClick={onDelete} style={{ backgroundColor: "#d63031", color: "#fff" }}>Delete</button>
    </li>
  );
}