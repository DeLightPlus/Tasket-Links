import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(isAuthenticated ? '/' : '/login');
  };

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  const handleAvatarClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo" onClick={handleLogoClick}>
          Tasket Links
        </h1>
        <nav className="nav">
          <ul>
            <li>
              <button className="get-started-btn" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </li>
            <li>
              <img
                src="/avatar.png" // Replace with your avatar image path
                alt="Avatar"
                className="avatar"
                onClick={handleAvatarClick}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
