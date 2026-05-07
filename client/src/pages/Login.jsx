import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="auth-page">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="premium-card"
      >
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">✨</div>
          <h1 className="mb-2">PerformIQ</h1>
          <p className="text-sm font-medium tracking-wide">THE FUTURE OF EXCELLENCE 🚀</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-200 p-3 rounded-xl text-xs font-bold text-center uppercase tracking-widest"
              >
                ⚠️ {error}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-1">
            <label className="input-label">Corporate Email 📧</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modern-input pl-12" 
                placeholder="name@enterprise.com"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center px-1">
              <label className="input-label">Secure Password 🔒</label>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Forgot?</span>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="modern-input pl-12" 
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn-premium mt-4"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <span>Sign In to Portal</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase opacity-40 mb-6">
            Trusted by the world's best teams 🏢
          </p>
          <div className="flex justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-lg font-black italic">APPLE-ISH</div>
            <div className="text-lg font-black italic">STRIPE-Y</div>
            <div className="text-lg font-black italic">SAAS-Y</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
