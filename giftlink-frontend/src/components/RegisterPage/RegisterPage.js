import React, { useState } from "react";

function RegisterPage() {

  const [username, setUsername] = useState("testuser");
  const [password, setPassword] = useState("password123");

  const registerUser = async () => {

    await fetch("http://localhost:3060/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

  };

  return (
    <div>
      <h1>Register Page</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={registerUser}>
        Register
      </button>
    </div>
  );
}

export default RegisterPage;