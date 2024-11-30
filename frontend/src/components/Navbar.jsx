import { FaSearch } from "react-icons/fa";
import { useAuth } from "../context/AuthProvider";
import Logout from "../Auth/Logout";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import { useState } from "react";

const Navbar = () => {
  const [authUser] = useAuth(); // Destructure authUser directly
  const [isNavOpen, setIsNavOpen] = useState(false); // Handle navbar toggle

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h2 className="mb-0 text-primary">BookStore</h2>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/course" className="nav-link text-dark">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark">
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <div className="input-group me-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="button">
                <FaSearch />
              </button>
            </div>

            {authUser ? (
              <Logout />
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-warning">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
