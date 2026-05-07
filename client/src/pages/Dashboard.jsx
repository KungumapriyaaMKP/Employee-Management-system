import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Calendar,
  Filter
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
  { name: 'JAN', performance: 65, efficiency: 70 },
  { name: 'FEB', performance: 75, efficiency: 82 },
  { name: 'MAR', performance: 85, efficiency: 78 },
  { name: 'APR', performance: 78, efficiency: 85 },
  { name: 'MAY', performance: 90, efficiency: 92 },
  { name: 'JUN', performance: 95, efficiency: 88 },
];

const StatCard = ({ title, value, change, icon, trend }) => (
  <div className="card p-6">
    <div className="flex justify-between items-start mb-4">
      <div className="text-[#8b949e]">{icon}</div>
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${trend === 'up' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
        {trend === 'up' ? '+' : '-'}{change}%
      </span>
    </div>
    <p className="text-[#8b949e] text-xs font-bold uppercase tracking-widest mb-1">{title}</p>
    <h3 className="text-2xl font-bold text-[#f0f6fc]">{value}</h3>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Operational Insights</h1>
          <p className="text-[#8b949e]">Enterprise performance metrics for Q2 2026</p>
        </div>
        <div className="flex gap-2">
          <button className="btn bg-[#21262d] text-[#c9d1d9] border border-[#30363d] hover:bg-[#30363d] text-sm">
            <Calendar size={16} className="mr-2" />
            Last 30 Days
          </button>
          <button className="btn btn-primary text-sm">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Headcount" 
          value="1,240" 
          change={4} 
          icon={<Users size={18} />} 
          trend="up"
        />
        <StatCard 
          title="Global Perf." 
          value="88.4%" 
          change={1.2} 
          icon={<TrendingUp size={18} />} 
          trend="up"
        />
        <StatCard 
          title="Goal Delta" 
          value="42" 
          change={2.4} 
          icon={<Target size={18} />} 
          trend="down"
        />
        <StatCard 
          title="Retention" 
          value="98.2%" 
          change={0.8} 
          icon={<Award size={18} />} 
          trend="up"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-6 min-h-[420px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold">Performance Index</h3>
              <p className="text-xs text-[#8b949e]">System-wide output tracking</p>
            </div>
            <Filter size={16} className="text-[#8b949e] cursor-pointer" />
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#30363d" />
                <XAxis dataKey="name" stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} tickMargin={10} />
                <YAxis stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px' }}
                  itemStyle={{ color: '#f0f6fc', fontSize: '12px' }}
                  labelStyle={{ color: '#8b949e', fontSize: '10px', marginBottom: '4px' }}
                />
                <Area type="monotone" dataKey="performance" stroke="#4f46e5" fillOpacity={1} fill="url(#colorPerf)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6 min-h-[420px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold">Efficiency Distribution</h3>
              <p className="text-xs text-[#8b949e]">Departmental output analysis</p>
            </div>
            <MoreVertical size={16} className="text-[#8b949e] cursor-pointer" />
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#30363d" />
                <XAxis dataKey="name" stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} tickMargin={10} />
                <YAxis stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px' }}
                  cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                />
                <Bar dataKey="efficiency" fill="#3fb950" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
