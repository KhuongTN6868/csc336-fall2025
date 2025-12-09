import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_PATH = path.join(process.cwd(), "data.json");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

function readData() {
  try { return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8")); }
  catch { return []; }
}

function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

app.get("/api/items", (req, res) => {
  res.json(readData());
});

// POST new item
app.post("/api/items", (req, res) => {
  const { text, important } = req.body;
  if (!text || text.trim().length < 3) return res.status(400).json({ error: "Text must be at least 3 characters." });

  const data = readData();
  if (data.some(it => it.text.toLowerCase() === text.toLowerCase()))
    return res.status(400).json({ error: "This note already exists." });

  const newItem = { id: Date.now().toString(36), text: text.trim(), important: !!important };
  data.push(newItem);
  writeData(data);
  res.status(201).json(newItem);
});

// Toggle important
app.patch("/api/items/:id/toggle", (req, res) => {
  const data = readData();
  const item = data.find(it => it.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });

  item.important = !item.important;
  writeData(data);
  res.json(item);
});

// DELETE item
app.delete("/api/items/:id", (req, res) => {
  let data = readData();
  const item = data.find(it => it.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });

  data = data.filter(it => it.id !== req.params.id);
  writeData(data);
  res.json({ message: "Item deleted", id: req.params.id });
});

// Serve React app
app.get("*", (req, res) => {
  const indexFile = path.join(process.cwd(), "public", "index.html");
  if (fs.existsSync(indexFile)) res.sendFile(indexFile);
  else res.status(404).send("Not found");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
