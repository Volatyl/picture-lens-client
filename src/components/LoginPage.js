import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and login logic using fetch
    // Replace the dummy URL with your actual API endpoint for user login
    fetch('https://api.example.com/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });

    // Reset the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <h2>Sign up to download unlimited full resolution media</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="login-form-group">
            <label htmlFor="email">Username or Email</label>
            <input
              type="text"
              id="email"
              className="login-input"
              placeholder="example@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="login-button">Log in</button>
      </form>
      <div className="login-options">
        <p>Continue with:</p>
        <button className="login-option-button">Continue with Google</button>
        <button className="login-option-button">Continue with Facebook</button>
      </div>
      <p>or</p>
      <div className="login-login">
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
        <p><a href="/forgot-password">Forgot password?</a></p>
      </div>
    </div>
  );
};

export default LoginPage;