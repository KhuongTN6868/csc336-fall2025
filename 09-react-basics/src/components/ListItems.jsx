function ListItem({ text, important }) {
  return (
    <li style={{ fontWeight: important ? "bold" : "normal" }}>
      {text}
    </li>
  );
}

export default ListItem;
