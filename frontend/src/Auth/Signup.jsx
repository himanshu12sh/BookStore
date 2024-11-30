import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // To redirect after signup

function SignUp() {
  const [data, setData] = useState({
    fname: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.fname || !data.email || !data.password || !data.cpassword) {
      toast.error("Please fill all the fields");
      return;
    }

    if (data.password !== data.cpassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/user/register", {
        fname: data.fname,
        email: data.email,
        password: data.password,
      });

      if (response.status === 201) {
        toast.success("Registration Successful! Redirecting to login...");

        // Delay of 2 seconds before redirecting to the login page
        setTimeout(() => {
          navigate("/login");
        }, 2000);

        // Clear the form fields
        setData({
          fname: '',
          email: '',
          password: '',
          cpassword: '',
        });
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 400) {
        toast.error(err.response.data.message); // Show backend error message
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
        <div className="text-center mb-4">
          <h1 className="h4 mb-2 fw-bold">Sign Up</h1>
          <p className="text-muted">
            Create your account by filling out the details below.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-pill px-4"
              id="floatingName"
              placeholder="John Doe"
              name="fname"
              value={data.fname}
              onChange={handleInput}
              required
            />
            <label htmlFor="floatingName">Full Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded-pill px-4"
              id="floatingEmail"
              placeholder="name@example.com"
              name="email"
              value={data.email}
              onChange={handleInput}
              required
            />
            <label htmlFor="floatingEmail">Email address</label>
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

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded-pill px-4"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              name="cpassword"
              value={data.cpassword}
              onChange={handleInput}
              required
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>

          <button
            className="btn btn-primary w-100 py-2 rounded-pill"
            type="submit"
          >
            Sign Up
          </button>

          <div className="text-center mt-3">
            <p className="mt-2">
              Already have an account?{' '}
              <a href="/login" className="text-primary text-decoration-none">
                Sign in
              </a>
            </p>
          </div>
        </form>

        <p className="mt-4 mb-0 text-muted text-center">© 2024–2025</p>
      </div>
    </div>
  );
}

export default SignUp;
