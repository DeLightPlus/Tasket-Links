import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../modals/LoginModal';
import SignupModal from '../modals/SignupModal';
import './Header.css';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogoClick = () => {
    navigate(isAuthenticated ? '/' : '/login');
  };

  const handleGetStartedClick = () => {
    setShowSignup(true);
  };

  const handleAvatarClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
      navigate('/login');
    } else {
      setShowLogin(true);
    }
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="Tasket-Links Logo" className="h-10 w-10" />
          <span className="text-3xl font-bold text-pink-600 tracking-tight">Tasket-Links</span>
        </div>
        <nav className="nav">
          <ul className="flex gap-4 items-center">
            <li>
              <a href="/" onClick={handleLogoClick}>
                Create
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <button className="get-started-btn" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </li>
            <li>
              <span className="flex items-center">
                <span
                  className="avatar border-2 border-gray-300 rounded-full overflow-hidden cursor-pointer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}
                  onClick={handleAvatarClick}
                >
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="Avatar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onSwitchToSignup={handleSwitchToSignup} />
      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} onSwitchToLogin={handleSwitchToLogin} />
    </header>
  );
};

export default Header;
