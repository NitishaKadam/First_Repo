import React from "react";

function Register() {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password:</label>
        <input type="password" placeholder="Create a password" required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
