import React from 'react';
import { Target, CheckCircle2, Circle, Clock, Plus, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

const GoalCard = ({ title, progress, deadline, status, emoji }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-emerald-400 bg-emerald-400/10';
      case 'In Progress': return 'text-primary bg-primary/10';
      case 'Pending': return 'text-amber-400 bg-amber-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="glass-card hover:border-primary/30 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{emoji}</div>
          <div>
            <h4 className="font-bold text-lg">{title}</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${getStatusColor(status)}`}>
                {status}
              </span>
              <span className="text-gray-500 text-xs flex items-center gap-1">
                <Clock size={12} /> {deadline}
              </span>
            </div>
          </div>
        </div>
        <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-400">Progress</span>
          <span className="text-white">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${progress === 100 ? 'bg-emerald-500' : 'bg-primary'}`}
          />
        </div>
      </div>
    </div>
  );
};

const Goals = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Strategic Goals 🎯</h1>
          <p className="text-gray-400">Turning vision into reality, one milestone at a time.</p>
        </div>
        <button className="btn-primary">
          <Plus size={18} />
          New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GoalCard 
          title="Product Launch Q3" 
          progress={75} 
          deadline="Sep 30, 2026" 
          status="In Progress"
          emoji="🚀"
        />
        <GoalCard 
          title="Client Satisfaction" 
          progress={92} 
          deadline="Dec 15, 2026" 
          status="In Progress"
          emoji="💎"
        />
        <GoalCard 
          title="Team Expansion" 
          progress={100} 
          deadline="May 01, 2026" 
          status="Completed"
          emoji="🤝"
        />
        <GoalCard 
          title="New Market Research" 
          progress={20} 
          deadline="Oct 10, 2026" 
          status="Pending"
          emoji="🔍"
        />
        <GoalCard 
          title="Infrastructure Upgrade" 
          progress={45} 
          deadline="Nov 20, 2026" 
          status="In Progress"
          emoji="⚡"
        />
        <GoalCard 
          title="Brand Refresh" 
          progress={0} 
          deadline="Jan 15, 2027" 
          status="Pending"
          emoji="🎨"
        />
      </div>
    </div>
  );
};

export default Goals;
