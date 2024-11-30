import React from 'react';

function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: '500px', width: '100%', borderRadius: '15px' }}
      >
        <form>
          <div className="text-center mb-4">
            <h1 className="h4 mb-2 fw-bold">Contact Us</h1>
            <p className="text-muted">We'd love to hear from you! Please fill out the form below.</p>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-pill px-4"
              id="floatingName"
              placeholder="John Doe"
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
              required
            />
            <label htmlFor="floatingEmail">Email Address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-pill px-4"
              id="floatingSubject"
              placeholder="Subject"
              required
            />
            <label htmlFor="floatingSubject">Subject</label>
          </div>

          <div className="form-floating mb-3">
            <textarea
              className="form-control px-4"
              id="floatingMessage"
              placeholder="Your message here..."
              style={{ height: '150px', borderRadius: '15px' }}
              required
            ></textarea>
            <label htmlFor="floatingMessage">Message</label>
          </div>

          <button
            className="btn btn-primary w-100 py-2 rounded-pill"
            type="submit"
          >
            Send Message
          </button>

          <p className="mt-4 mb-0 text-muted text-center">© 2024–2025</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
