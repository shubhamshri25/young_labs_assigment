import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchGreeting = async () => {
    setError("");
    setMessage("");

    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Name is required. ");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/greet?name=${name}`
      );
    
      setMessage(response.data.message);
      setName("");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchGreeting}>Get Greeting</button>
      {message && <h2 className="message">{message}</h2>}
      {error && <h2 className="error">{error}</h2>}
    </div>
  );
}

export default App;
