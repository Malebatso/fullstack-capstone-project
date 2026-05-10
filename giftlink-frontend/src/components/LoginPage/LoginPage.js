import React from "react";

function LoginPage() {

  const loginUser = async () => {

    await fetch("http://localhost:3060/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer token"
      },
      body: JSON.stringify({
        username: "testuser",
        password: "password123"
      })
    });

  };

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={loginUser}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;