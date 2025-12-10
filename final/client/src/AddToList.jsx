import { useState } from "react";

export default function AddToList() {
  const [text, setText] = useState("");
  const [important, setImportant] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed.length < 3) {
      alert("Please enter at least 3 characters");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/items", {   
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed, important })
      });

      const data = await res.json();

      if (!res.ok) alert(data?.error || "Server rejected the note");
      else alert("Note added! Go to List page to see it.");

      setText("");
      setImportant(false);

    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h1>Add a Note</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Note:
          <input value={text} onChange={(e) => setText(e.target.value)} required />
        </label>
        <label style={{ marginLeft: "10px" }}>
          Important:
          <input type="checkbox" checked={important} onChange={e => setImportant(e.target.checked)} />
        </label>
        <button type="submit" disabled={submitting} style={{ marginLeft: "10px" }}>
          {submitting ? "Adding…" : "Add"}
        </button>
      </form>
    </div>
  );
}
