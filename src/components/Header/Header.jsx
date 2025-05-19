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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = React.useRef(null);
  const [userProfile, setUserProfile] = useState(null);

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

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  React.useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    const handleScroll = () => {
      setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [dropdownOpen]);

  React.useEffect(() => {
    if (isAuthenticated && !userProfile) {
      import('../../services/auth').then(({ getUserProfile }) => {
        getUserProfile().then((profile) => {
          setUserProfile(profile);
        }).catch(() => {
          setUserProfile(null);
        });
      });
    }
  }, [isAuthenticated, userProfile]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src="/vite.svg" alt="Tasket-Links Logo" className="h-10 w-10" />
          <span className="text-3xl font-bold text-pink-600 tracking-tight">Tasket-Links</span>
        </div>
        <nav className="nav">
          <ul className="flex gap-4 items-center">
            <li className="relative" ref={dropdownRef}>
              <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 focus:outline-none" type="button" onClick={handleDropdownToggle} aria-expanded={dropdownOpen} aria-haspopup="true">
                <span className="font-semibold">Create</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-8 left-0 mt-2 w-64 bg-white text-gray-900 rounded shadow-lg z-50 transition-opacity duration-200">
                  <ul className='flex-col'>
                    <li className="flex items-start gap-3 p-2 hover:bg-gray-100 cursor-pointer" onClick={() => { navigate('/dashboard?type=task'); setDropdownOpen(false); }}>
                      <span className="mt-1"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 12l2 2 4-4" /></svg></span>
                      <div>
                        <div className="font-medium">Task</div>
                        <div className="text-xs text-gray-500">Create and manage your tasks efficiently.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-2 hover:bg-gray-100 cursor-pointer" onClick={() => { navigate('/dashboard?type=shopping'); setDropdownOpen(false); }}>
                      <span className="mt-1"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></span>
                      <div>
                        <div className="font-medium">Shopping</div>
                        <div className="text-xs text-gray-500">Create and organize shopping lists.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-2 hover:bg-gray-100 cursor-pointer" onClick={() => { navigate('/dashboard?type=bookmark'); setDropdownOpen(false); }}>
                      <span className="mt-1"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg></span>
                      <div>
                        <div className="font-medium">Bookmark</div>
                        <div className="text-xs text-gray-500">Save and organize your favorite links.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-2 hover:bg-gray-100 cursor-pointer" onClick={() => { navigate('/dashboard?type=recipe'); setDropdownOpen(false); }}>
                      <span className="mt-1"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 21V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /></svg></span>
                      <div>
                        <div className="font-medium">Recipe</div>
                        <div className="text-xs text-gray-500">Collect and manage your recipes.</div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
            {/* Hide Get Started if authenticated */}
            {!isAuthenticated && (
              <li>
                <button
                  className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </button>
              </li>
            )}

            <li>
              <span className="flex items-center">
                <span
                  className="avatar border-2 border-gray-300 rounded-full overflow-hidden cursor-pointer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}
                  onClick={() => setProfileDropdownOpen((prev) => !prev)}
                >
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="Avatar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </span>
              </span>
              {profileDropdownOpen && (
                <div className="absolute top-16 right-4 mt-2 w-64 bg-white text-gray-900 rounded shadow-lg z-50 transition-opacity duration-200 border border-gray-200">
                  <ul className="flex flex-col">
                    <li className="h-14 gap-2 flex flex-col justify-center px-4 py-2 border-b border-gray-100">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">{userProfile ? userProfile.email : ''}</p>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dashboard</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Settings</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Analytics</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Help & Feedback</li>
                    <li className="px-4 py-2 hover:bg-red-100 text-red-600 font-semibold cursor-pointer" onClick={() => { dispatch(logout()); navigate('/login'); setProfileDropdownOpen(false); }}>Log Out</li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button
                className="avatar-btn flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
                onClick={handleAvatarClick}
              >
                <span className="font-semibold">{isAuthenticated ? (userProfile ? (userProfile.name ? userProfile.name.split(' ')[0] : (userProfile.email ? userProfile.email.split('@')[0] : 'User')) : 'User') : 'Login'}</span>
              </button>
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
