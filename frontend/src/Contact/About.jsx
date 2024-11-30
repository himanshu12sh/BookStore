import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <div className="card p-5 shadow-lg">
        <h1 className="text-center fw-bold mb-4">About Us</h1>
        <p className="text-muted text-center">
          Welcome to our platform! Our mission is to provide users with a seamless and user-friendly experience.
        </p>
        <p className="text-muted text-center">
          We are committed to offering a secure and efficient solution that caters to your needs. Whether you are a new visitor or a returning user, our application is designed to make your journey simple and enjoyable.
        </p>
        <h3 className="mt-4 fw-bold">Our Features:</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">User Registration and Login</li>
          <li className="list-group-item">Secure Authentication System</li>
          <li className="list-group-item">Responsive Design for All Devices</li>
          <li className="list-group-item">User-friendly Interface</li>
        </ul>
        <p className="text-muted text-center mt-4">
          Thank you for choosing our platform. If you have any questions or feedback, feel free to reach out to us!
        </p>
      </div>
    </div>
  );
}

export default About;
