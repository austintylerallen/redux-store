import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleRegister = (user) => {
    console.log('Registered:', user);
    setIsAuthenticated(true);
  };

  const handleLogin = (user) => {
    console.log('Logged in:', user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="container">
        <header className="my-4">
          <h1 className="text-center">E-Commerce Platform</h1>
          <nav className="text-center">
            {isAuthenticated ? (
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary me-2">Login</Link>
                <Link to="/register" className="btn btn-secondary">Register</Link>
              </>
            )}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register onRegister={handleRegister} />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
            <Route path="/" element={isAuthenticated ? (
              <div className="row">
                <section className="col-md-8">
                  <h2 className="mb-4">Products</h2>
                  <ProductList />
                </section>
                <section className="col-md-4">
                  <h2 className="mb-4">Shopping Cart</h2>
                  <Cart />
                </section>
              </div>
            ) : (
              <Navigate to="/login" />
            )} />
          </Routes>
        </main>
        <footer className="text-center my-4">
          <p>&copy; 2024 E-Commerce Platform</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
