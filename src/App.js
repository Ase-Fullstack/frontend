import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Login from './pages/auth/Login.js';
import Register from './pages/auth/Register.js';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLoginStatus } from './redux/features/auth/authSlice.js';
import Profile from './pages/profile/Profile.js';

const App = () => {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
