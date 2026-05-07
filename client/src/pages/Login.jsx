import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, Loader2, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const result = await login(email, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-box"
      >
        <div className="brand-section">
          <div className="brand-logo">
            <Shield size={24} strokeWidth={2.5} />
            <span>PerformIQ</span>
          </div>
          <div className="brand-tagline">Performance Intelligence 🛰️</div>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold text-center rounded-lg">
              AUTHENTICATION_FAILURE: {error}
            </div>
          )}

          <div className="form-group">
            <div className="label-wrapper">
              <label>System Identity 🆔</label>
            </div>
            <div className="input-container">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@enterprise.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-wrapper">
              <label>Security Key 🔑</label>
              <span className="text-[10px] font-bold text-[#444] cursor-pointer hover:text-white transition-colors">RESET_KEY</span>
            </div>
            <div className="input-container">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="primary-button"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <>
                <span>ESTABLISH_SESSION</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div className="footer-text">
          <p>Personnel access only 🏢. Your IP and session will be logged for security.</p>
        </div>
      </motion.div>

      <div className="mt-12 flex items-center gap-4 opacity-20">
        <div className="dot active"></div>
        <div className="text-[10px] font-bold tracking-[4px] uppercase">Node_Main_Cluster_01</div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Login;
