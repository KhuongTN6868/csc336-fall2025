import { useState } from "react";
import ListItem from "./components/ListItems.jsx";
import MyButton from "./components/MyButton.jsx";

function Home() {
  const [items, setItems] = useState([
    { text: "Go to Japan", important: true },
    { text: "Learn React", important: false }
  ]);

  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.trim() === "") return;
    setItems([...items, { text: inputValue, important: false }]);
    setInputValue("");
  }

  return (
    <div>
      <h1>My Dream List</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <MyButton onClick={handleAdd} text="Add Item" />

      <ul>
        {items.map((item, index) => (
          <ListItem
            key={index}
            text={item.text}
            important={item.important}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;
