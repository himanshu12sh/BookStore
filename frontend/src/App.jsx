import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Home/Home';
import Course from './Courses/Course';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Contact from './Contact/Contact';
import About from './Contact/About';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Course />:<Navigate to={"/signup"}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
