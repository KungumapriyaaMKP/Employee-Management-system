import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { Award, Zap, Heart, Shield, Star } from 'lucide-react';

const radarData = [
  { subject: 'Productivity', A: 120, B: 110, fullMark: 150 },
  { subject: 'Quality', A: 98, B: 130, fullMark: 150 },
  { subject: 'Collaboration', A: 86, B: 130, fullMark: 150 },
  { subject: 'Reliability', A: 99, B: 100, fullMark: 150 },
  { subject: 'Technical', A: 85, B: 90, fullMark: 150 },
  { subject: 'Leadership', A: 65, B: 85, fullMark: 150 },
];

const performanceHistory = [
  { month: 'Jan', score: 72 },
  { month: 'Feb', score: 75 },
  { month: 'Mar', score: 82 },
  { month: 'Apr', score: 80 },
  { month: 'May', score: 88 },
  { month: 'Jun', score: 92 },
];

const Performance = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Performance Analytics 📈</h1>
          <p className="text-gray-400">Deep dive into organizational excellence.</p>
        </div>
        <div className="flex gap-4">
          <div className="glass-card flex items-center gap-3 py-2 px-4">
            <span className="text-primary font-bold">Q2 2026</span>
            <span className="text-gray-500">|</span>
            <span className="text-emerald-400">+14% Growth</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skill Analysis Radar */}
        <div className="glass-card lg:col-span-1">
          <h3 className="text-xl font-bold mb-6">Competency Map 🗺️</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={12} />
                <Radar
                  name="Current Period"
                  dataKey="A"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Target"
                  dataKey="B"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.1}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Over Time */}
        <div className="glass-card lg:col-span-2">
          <h3 className="text-xl font-bold mb-6">Aggregate Performance Trend 🌊</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceHistory}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#6366f1" 
                  strokeWidth={4} 
                  dot={{ fill: '#6366f1', strokeWidth: 2, r: 6, stroke: '#fff' }} 
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card flex items-center gap-4 border-l-4 border-primary">
          <div className="p-3 bg-primary/10 text-primary rounded-xl"><Star size={24} /></div>
          <div>
            <p className="text-gray-400 text-sm">Top Performer</p>
            <p className="font-bold">Sarah Chen 👑</p>
          </div>
        </div>
        <div className="glass-card flex items-center gap-4 border-l-4 border-emerald-500">
          <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl"><Zap size={24} /></div>
          <div>
            <p className="text-gray-400 text-sm">Highest Growth</p>
            <p className="font-bold">+22% Marcus T. ⚡</p>
          </div>
        </div>
        <div className="glass-card flex items-center gap-4 border-l-4 border-rose-500">
          <div className="p-3 bg-rose-500/10 text-rose-500 rounded-xl"><Heart size={24} /></div>
          <div>
            <p className="text-gray-400 text-sm">Culture Champ</p>
            <p className="font-bold">Aisha Gupta ❤️</p>
          </div>
        </div>
        <div className="glass-card flex items-center gap-4 border-l-4 border-amber-500">
          <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl"><Shield size={24} /></div>
          <div>
            <p className="text-gray-400 text-sm">Risk Factor</p>
            <p className="font-bold">2 At-Risk Depts ⚠️</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
