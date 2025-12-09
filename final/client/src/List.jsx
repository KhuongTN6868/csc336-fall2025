import { useEffect, useState } from "react";
import ListItem from "./ListItem";

export default function List() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadItems() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/items");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load items");
    } finally {
      setLoading(false);
    }
  }

  async function toggleImportant(id) {
    await fetch(`http://localhost:4000/api/items/${id}/toggle`, { method: "PATCH" });
    loadItems();
  }

  async function deleteItem(id) {
    await fetch(`http://localhost:4000/api/items/${id}`, { method: "DELETE" });
    loadItems();
  }

  useEffect(() => { loadItems(); }, []);

  return (
    <div>
      <h1>Notes List</h1>
      <button onClick={loadItems} className="refresh-btn">Refresh</button>
      {loading ? <p>Loading…</p> :
        <ul>
          {items.length === 0 ? <li>No notes yet.</li> :
            items.map(it => (
              <ListItem
                key={it.id}
                text={it.text}
                important={it.important}
                onToggle={() => toggleImportant(it.id)}
                onDelete={() => deleteItem(it.id)}
              />
            ))}
        </ul>
      }
    </div>
  );
}
