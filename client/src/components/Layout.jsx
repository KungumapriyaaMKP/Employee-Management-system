import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Target, 
  Settings, 
  LogOut,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/' },
    { icon: <Users size={20} />, label: 'Directory', path: '/employees' },
    { icon: <BarChart3 size={20} />, label: 'Performance', path: '/performance' },
    { icon: <Target size={20} />, label: 'Strategic Goals', path: '/goals' },
    { icon: <Settings size={20} />, label: 'System Settings', path: '/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-[#0a0c10] text-[#f0f6fc]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#30363d] bg-[#0d1117] hidden md:flex flex-col">
        <div className="p-6 mb-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-indigo-500" size={28} />
            <h2 className="text-xl font-bold tracking-tight">PerformIQ</h2>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-indigo-500/10 text-indigo-400' 
                    : 'text-[#8b949e] hover:bg-[#161b22] hover:text-[#f0f6fc]'
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-[#30363d] bg-[#0d1117]">
          <div className="flex items-center gap-3 px-2 mb-4">
            <img 
              src={user?.avatar} 
              alt="" 
              className="w-9 h-9 rounded-full bg-[#161b22] border border-[#30363d]"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate">{user?.name}</p>
              <p className="text-[10px] text-[#8b949e] uppercase tracking-wider">{user?.role}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#8b949e] hover:text-red-400 hover:bg-red-400/5 rounded-lg transition-all"
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 border-b border-[#30363d] bg-[#0d1117] flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-2 text-sm text-[#8b949e]">
            <span>System</span>
            <ChevronRight size={14} />
            <span className="text-[#f0f6fc] font-medium">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-[10px] font-bold border border-emerald-500/20">
              LIVE
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
