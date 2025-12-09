import { useState, useEffect } from "react";

function RandomDog() {
  const [dogUrl, setDogUrl] = useState("");

  async function fetchDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogUrl(data.message);
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div>
      <h1>Random Dog</h1>

      <button onClick={fetchDog}>Get New Dog</button>

      {dogUrl && (
        <img
          src={dogUrl}
          alt="A dog"
          style={{ width: "300px", marginTop: "20px" }}
        />
      )}
    </div>
  );
}

export default RandomDog;
