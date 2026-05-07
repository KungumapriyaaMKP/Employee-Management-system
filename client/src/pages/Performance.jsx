import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { ShieldCheck, Zap, Activity, Info } from 'lucide-react';

const radarData = [
  { subject: 'Output', A: 120, B: 110 },
  { subject: 'Stability', A: 98, B: 130 },
  { subject: 'Velocity', A: 86, B: 130 },
  { subject: 'Compliance', A: 99, B: 100 },
  { subject: 'Technical', A: 85, B: 90 },
  { subject: 'Ops', A: 65, B: 85 },
];

const performanceHistory = [
  { month: 'JAN', score: 72 },
  { month: 'FEB', score: 75 },
  { month: 'MAR', score: 82 },
  { month: 'APR', score: 80 },
  { month: 'MAY', score: 88 },
  { month: 'JUN', score: 92 },
];

const Performance = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Performance Analytics</h1>
          <p className="text-[#8b949e]">Internal benchmarking and efficiency analysis</p>
        </div>
        <div className="flex gap-4">
          <div className="px-3 py-1.5 bg-[#238636]/10 border border-[#238636]/20 rounded-lg flex items-center gap-2">
            <Activity size={14} className="text-[#3fb950]" />
            <span className="text-[#3fb950] text-xs font-bold uppercase tracking-widest">Optimal State</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="card lg:col-span-1 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold">Competency Matrix</h3>
            <Info size={16} className="text-[#8b949e]" />
          </div>
          <div className="h-[320px] flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#30363d" />
                <PolarAngleAxis dataKey="subject" stroke="#8b949e" fontSize={10} fontWeight="bold" />
                <Radar
                  name="System"
                  dataKey="A"
                  stroke="#4f46e5"
                  fill="#4f46e5"
                  fillOpacity={0.4}
                />
                <Radar
                  name="Baseline"
                  dataKey="B"
                  stroke="#3fb950"
                  fill="#3fb950"
                  fillOpacity={0.1}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex gap-4 justify-center text-[10px] uppercase font-bold tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-[#8b949e]">System Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[#8b949e]">Target Baseline</span>
            </div>
          </div>
        </div>

        <div className="card lg:col-span-2 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold">Efficiency Timeline</h3>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] text-[#8b949e] uppercase font-bold tracking-widest">Real-time Data</span>
            </div>
          </div>
          <div className="h-[320px] flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceHistory}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#30363d" />
                <XAxis dataKey="month" stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} tickMargin={10} />
                <YAxis stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#4f46e5" 
                  strokeWidth={3} 
                  dot={{ fill: '#4f46e5', strokeWidth: 2, r: 4, stroke: '#0d1117' }} 
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-4 border-l-2 border-indigo-500">
          <p className="text-[10px] text-[#8b949e] uppercase font-bold tracking-widest mb-1">Top Performer</p>
          <p className="text-sm font-bold text-[#f0f6fc]">Sarah Chen</p>
        </div>
        <div className="card p-4 border-l-2 border-emerald-500">
          <p className="text-[10px] text-[#8b949e] uppercase font-bold tracking-widest mb-1">Highest Velocity</p>
          <p className="text-sm font-bold text-[#f0f6fc]">Marcus Thorne</p>
        </div>
        <div className="card p-4 border-l-2 border-amber-500">
          <p className="text-[10px] text-[#8b949e] uppercase font-bold tracking-widest mb-1">Quality Lead</p>
          <p className="text-sm font-bold text-[#f0f6fc]">James Wilson</p>
        </div>
        <div className="card p-4 border-l-2 border-[#30363d]">
          <p className="text-[10px] text-[#8b949e] uppercase font-bold tracking-widest mb-1">System Health</p>
          <p className="text-sm font-bold text-[#f0f6fc]">99.8% Nominal</p>
        </div>
      </div>
    </div>
  );
};

export default Performance;
