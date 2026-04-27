import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/authSlice';

// Component Imports
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './components/ProtectedRoute';

// Page Imports
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar appears on all pages and adapts based on auth state */}
        <Navbar user={user} onLogout={handleLogout} />

        <div className="container mx-auto px-4 py-6">
          <Routes>
            {/* Public Route: Login */}
            <Route 
              path="/login" 
              element={user ? <Navigate to="/" /> : <Login />} 
            />

            {/* Protected Route: Dashboard */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Fallback: Redirect any unknown routes to Dashboard/Login */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;