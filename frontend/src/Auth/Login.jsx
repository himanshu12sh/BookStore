import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        toast.success("Login Successful");

        // Save user data in localStorage
        localStorage.setItem("User", JSON.stringify(response.data));

        // Clear the form fields
        setData({
          email: '',
          password: '',
        });

        // Delay before reloading or redirecting
        setTimeout(() => {
          window.location.href = "/"; // Redirect to home or reload
        }, 2000); // 2000ms = 2 seconds
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 400) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong, please try again.");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}
      >
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <h1 className="h4 mb-2 fw-bold">Sign In</h1>
            <p className="text-muted">Welcome back! Please enter your details.</p>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded-pill px-4"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              value={data.email}
              onChange={handleInput}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded-pill px-4"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleInput}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            className="btn btn-primary w-100 py-2 rounded-pill"
            type="submit"
          >
            Sign In
          </button>

          <div className="text-center mt-3">
            <p className="mt-2">
              Don't have an account?{' '}
              <a href="/signup" className="text-primary text-decoration-none">
                Sign up
              </a>
            </p>
          </div>

          <p className="mt-4 mb-0 text-muted text-center">© 2024–2025</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
