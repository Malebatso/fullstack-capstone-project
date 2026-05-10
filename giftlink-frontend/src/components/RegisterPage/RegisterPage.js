import React from "react";

function RegisterPage() {

  const registerUser = async () => {

    await fetch("http://localhost:3060/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: "testuser",
        password: "password123"
      })
    });

  };

  return (
    <div>
      <h1>Register Page</h1>

      <button onClick={registerUser}>
        Register
      </button>
    </div>
  );
}

export default RegisterPage;