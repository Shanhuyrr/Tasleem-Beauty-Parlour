import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, token } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-serif font-bold"
            >
              <span className="text-amber-600">{location.pathname === '/login' ? 'Tasleem' : '✨ Tasleem'}</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  className={`font-semibold transition cursor-pointer pb-1 border-b-2 ${
                    isActive(item.path)
                      ? 'text-amber-600 border-amber-600'
                      : 'text-gray-700 border-transparent hover:text-amber-600'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {token && user ? (
              <>
                <span className="text-gray-700 font-semibold">👤 {user.name}</span>
                <motion.button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-amber-600 font-semibold transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <motion.button
                    className="text-gray-700 font-semibold hover:text-amber-600 transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/register">
                  <motion.button
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
            <Link to="/booking">
              <motion.button
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-amber-600"
            whileHover={{ scale: 1.1 }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-semibold transition ${
                      isActive(item.path)
                        ? 'text-amber-600'
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {token && user ? (
                  <>
                    <span className="text-gray-700 font-semibold">👤 {user.name}</span>
                    <button
                      onClick={handleLogout}
                      className="text-left text-gray-700 hover:text-amber-600 font-semibold transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-700 hover:text-amber-600 font-semibold"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold text-center"
                    >
                      Sign Up
                    </Link>
                  </>
                )}

                <Link
                  to="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-lg font-semibold text-center"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
