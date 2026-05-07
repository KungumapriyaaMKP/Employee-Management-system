import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Target, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/', emoji: '🏠' },
    { icon: <Users size={20} />, label: 'Employees', path: '/employees', emoji: '👥' },
    { icon: <BarChart3 size={20} />, label: 'Performance', path: '/performance', emoji: '📈' },
    { icon: <Target size={20} />, label: 'Goals', path: '/goals', emoji: '🎯' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings', emoji: '⚙️' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <aside className="w-72 glass-card m-4 mr-0 hidden md:flex flex-col">
        <div className="p-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-2xl">
              ⚡
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              PerformIQ
            </h2>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary/20 text-primary border border-primary/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]' 
                    : 'hover:bg-white/5 text-gray-400 hover:text-white'
                }`
              }
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </div>
              <span className="text-sm">{item.emoji}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="glass-card bg-white/5 p-4 rounded-2xl flex items-center gap-3 mb-4">
            <img 
              src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'} 
              alt="avatar" 
              className="w-10 h-10 rounded-full bg-slate-800"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-400 truncate uppercase">{user?.role || 'Role'}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 p-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
          >
            <LogOut size={18} />
            <span className="font-semibold text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
