import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    // Perform validation and login logic using fetch
    // Replace the dummy URL with your actual API endpoint for user login
    fetch('http://127.0.0.1:5555/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        // Check for errors in the response
        if (data.error) {
          setError(data.error);
        } else {
          // Redirect to the home page after successful login
          navigate('/'); // Replace '/' with the appropriate route for the home page
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
        setError('An error occurred during login.');
      });

    // Reset the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <h2>Sign up to download unlimited full-resolution media</h2>
      {error && <p className="error">{error}</p>}
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
