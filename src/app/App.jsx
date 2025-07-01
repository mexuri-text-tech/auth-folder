import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import HomePage from '../pages/home/home';
import './App.css';
import About from '../pages/about/about';
import PricingPage from '../pages/pricing/pricing';
import Login from '../auth/login/login';
import SignupPage from '../auth/signup/signup';
import ProfilePage from '../pages/profile/profile';

// Inside <Routes>:

// fetchAndSaveUser.js (you can put it anywhere, e.g., /utils)
export const fetchAndSaveUser = async () => {
    try {
        const res = await fetch(`${process.env.VITE_REACT_APP_API_URL}/auth/login/success`, {
            method: "GET",
            credentials: "include",
        });
        const data = await res.json();
        if (data.user) {
            localStorage.setItem("user", JSON.stringify({ user: data.user }));
            // redirect to /profile or home if you want
            window.location.href = "/profile";
        }
    } catch (err) {
        console.error("Login failed", err);
    }
};




function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index path='/' element={<HomePage />} />

          <Route path='/about' element={<About />} />

          <Route path='/pricing-and-packages' element={<PricingPage />} />

          <Route path='/login' element={<Login />} />

          <Route path="/sign-up" element={<SignupPage />} />

          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
