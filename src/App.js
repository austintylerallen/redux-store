// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
// import Register from './components/Register';
// import Login from './components/Login';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleRegister = (user) => {
//     console.log('Registered:', user);
//     setIsAuthenticated(true);
//   };

//   const handleLogin = (user) => {
//     console.log('Logged in:', user);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//           <div className="container">
//             <Link className="navbar-brand" to="/">Redux Store</Link>
//             <div className="collapse navbar-collapse">
//               <ul className="navbar-nav ms-auto">
//                 {isAuthenticated ? (
//                   <>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/">Products</Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/">Cart</Link>
//                     </li>
//                     <li className="nav-item">
//                       <button className="btn btn-danger nav-link" onClick={handleLogout}>Logout</button>
//                     </li>
//                   </>
//                 ) : (
//                   <>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/login">Login</Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/register">Register</Link>
//                     </li>
//                   </>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div className="container mt-4">
//           <Routes>
//             <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register onRegister={handleRegister} />} />
//             <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
//             <Route path="/" element={isAuthenticated ? (
//               <div className="row">
//                 <section className="col-md-8">
//                   <h2 className="mb-4">Products</h2>
//                   <ProductList />
//                 </section>
//                 <section className="col-md-4">
//                   <h2 className="mb-4">Shopping Cart</h2>
//                   <Cart />
//                 </section>
//               </div>
//             ) : (
//               <Navigate to="/login" />
//             )} />
//           </Routes>
//         </div>
//         <footer className="bg-primary text-white text-center py-3 mt-4">
//           <div className="container">
//             <p className="mb-0">&copy; 2024 Redux Store. All Rights Reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// };

// export default App;



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
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Redux Store</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {isAuthenticated ? (
                  <li className="nav-item">
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="btn btn-primary me-2" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn btn-secondary" to="/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container my-4">
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
        </div>
        <footer className="text-center my-4">
          <p>&copy; 2024 Redux Store</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
