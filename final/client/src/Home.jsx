import { useEffect, useState } from "react";

export default function Home() {
  const [dog, setDog] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => setDog(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Notes & Dogs</h1>
      <p>Add your notes and mark them as important!</p>
      {dog && <img src={dog} alt="Random Dog" style={{ maxWidth: "300px", marginTop: "20px", borderRadius: "10px" }} />}
    </div>
  );
}
