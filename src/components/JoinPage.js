import React, { useState } from 'react';

const JoinPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and registration logic using fetch
    // Replace the dummy URL with your actual API endpoint for user registration
    fetch('https://api.example.com/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
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
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="join-page">
      <h2>Sign up to download unlimited full resolution media</h2>
      <form onSubmit={handleSubmit}>
        <div className="join-form">
          <div className="join-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="join-input"
              placeholder="e.g. maria93"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="join-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="join-input"
              placeholder="example@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="join-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="join-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="join-button">Join</button>
      </form>
      <div className="join-social-login">
        <p>Continue with:</p>
        <button className="join-social-login-button">Continue with Google</button>
        <button className="join-social-login-button">Continue with Facebook</button>
      </div>
      <p>or</p>
      <div className="join-login">
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
};

export default JoinPage;
