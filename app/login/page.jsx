"use client";
import React from "react";

const BASE_URL = "http://localhost:5000/api/auth";

export default function Home() {
  const handleGoogleLogin = () => {
    window.location.href = `${BASE_URL}/google`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Google Login Test</h1>
      <button onClick={handleGoogleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Login with Google
      </button>
    </div>
  );
}
