import { useAuth } from "../context/AuthProvider"; // Assuming you're using a custom context
import { useNavigate } from "react-router-dom"; // For navigation
import toast from "react-hot-toast"; // Optional for better UX

function Logout() {
  const [authUser, setAuthUser] = useAuth(); // Get the setter to clear user auth
  const navigate = useNavigate(); // Hook to navigate

  const handleLogout = () => {
    setAuthUser(null); // Clear the authenticated user
    localStorage.removeItem("User"); // Remove the user from local storage

    // Optional: Show a toast notification
    toast.success("Logged out successfully!");

    // Delay navigation to the login page
    setTimeout(() => {
      navigate("/"); // Redirect to the login page
    }, 3000); // 2-second delay
  };

  return (
    <button
      onClick={handleLogout}
      className="btn btn-danger px-3 py-2 rounded-pill"
    >
      Logout
    </button>
  );
}

export default Logout;
