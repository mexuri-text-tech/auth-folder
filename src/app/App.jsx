import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import HomePage from '../pages/home/home';
import './App.css';
import About from '../pages/about/about';
import PricingPage from '../pages/pricing/pricing';
import Login from '../auth/login/login';
import SignupPage from '../auth/signup/signup';
import ProfileSetupForm from '../auth/ profileSetup/profileSetup';
import ProfilePage from '../pages/profile/profile';

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

          <Route path='/profile-setup' element={<ProfileSetupForm />} />

          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
