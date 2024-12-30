import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import './index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const [user, setUser] = useState(null);
  const [hasLoginAttempted, setHasLoginAttempted] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    setUser(response);
    setLoginStatus('success');
    setHasLoginAttempted(true);
    setIsModalOpen(true);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 2000);
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
    setLoginStatus('failure');
    setHasLoginAttempted(true);
    setIsModalOpen(true);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 2000);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setHasLoginAttempted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    setLoginStatus(null);
  };

  return (
    <header className="header">
      <div className="left-options">
        <Link to="/" className="logo1">TaskManager</Link>
        <Link to="/contactUs" className="option1">Contact Us</Link>
        <Link to="/prices" className="option1">Pricing</Link>
        <Link to="/try-it-free" className="option1">Try it Free</Link>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>

      <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/contactUs" className="option">Contact Us</Link>
        <Link to="/prices" className="option">Pricing</Link>
        <Link to="/try-it-free" className="option">Try it Free</Link>
        <Link to="/help" className="option">Help</Link>

        {!user ? (
          <button className="signin-button" onClick={openModal}>Sign In</button>
        ) : (
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        )}
      </nav>

      <div className="right-options">
        <Link to="/help" className="option">Help</Link>
        {!user ? (
          <button className="signin-button" onClick={openModal}>Sign In</button>
        ) : (
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>

            {hasLoginAttempted ? (
              <>
                <h2>{loginStatus === 'success' ? 'Login Successful!' : 'Login Failed'}</h2>
                <p>{loginStatus === 'success' ? 'You have successfully logged in.' : 'There was an error logging in. Please try again.'}</p>
              </>
            ) : (
              <h2>Sign In</h2>
            )}

            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
              useOneTap
              size="large"
              shape="pill"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
