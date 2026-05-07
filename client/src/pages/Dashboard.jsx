import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const data = [
  { name: 'Jan', performance: 65, efficiency: 70 },
  { name: 'Feb', performance: 75, efficiency: 82 },
  { name: 'Mar', performance: 85, efficiency: 78 },
  { name: 'Apr', performance: 78, efficiency: 85 },
  { name: 'May', performance: 90, efficiency: 92 },
  { name: 'Jun', performance: 95, efficiency: 88 },
];

const StatCard = ({ title, value, change, icon, color, emoji }) => (
  <div className="glass-card flex flex-col gap-4">
    <div className="flex justify-between items-start">
      <div className={`p-3 rounded-xl bg-${color}/10 text-${color}`}>
        {icon}
      </div>
      <span className="text-xl">{emoji}</span>
    </div>
    <div>
      <p className="text-gray-400 text-sm font-medium">{title}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <h3 className="text-2xl font-bold">{value}</h3>
        <span className={`text-xs flex items-center ${change > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
          {change > 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {Math.abs(change)}%
        </span>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Business Overview 📊</h1>
          <p className="text-gray-400 mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-card py-2 px-4 text-sm font-medium hover:bg-white/5 transition-colors">
            Download Report 📥
          </button>
          <button className="btn-primary">
            Manage Team 👥
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Employees" 
          value="124" 
          change={12} 
          icon={<Users size={20} />} 
          color="primary"
          emoji="👥"
        />
        <StatCard 
          title="Avg. Performance" 
          value="88.4%" 
          change={5.2} 
          icon={<TrendingUp size={20} />} 
          color="emerald"
          emoji="📈"
        />
        <StatCard 
          title="Goals Completed" 
          value="42" 
          change={-2.4} 
          icon={<Target size={20} />} 
          color="amber"
          emoji="🎯"
        />
        <StatCard 
          title="Recognition Given" 
          value="15" 
          change={18} 
          icon={<Award size={20} />} 
          color="purple"
          emoji="🏆"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Performance Trends ✨</h3>
            <button className="p-2 hover:bg-white/5 rounded-lg"><MoreVertical size={18} /></button>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="performance" stroke="#6366f1" fillOpacity={1} fill="url(#colorPerf)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Efficiency by Dept 🏢</h3>
            <button className="p-2 hover:bg-white/5 rounded-lg"><MoreVertical size={18} /></button>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                <Bar dataKey="efficiency" fill="#10b981" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
