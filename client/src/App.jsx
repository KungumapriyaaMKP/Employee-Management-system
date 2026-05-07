import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Employees from './pages/Employees';
import Performance from './pages/Performance';
import Goals from './pages/Goals';

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading... ⌛</div>;
  if (!token) return <Navigate to="/login" />;
  return <Layout>{children}</Layout>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/employees" 
            element={
              <ProtectedRoute>
                <Employees />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/performance" 
            element={
              <ProtectedRoute>
                <Performance />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/goals" 
            element={
              <ProtectedRoute>
                <Goals />
              </ProtectedRoute>
            } 
          />
          {/* Add more routes as needed */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
