import React from 'react';
import { Target, CheckCircle2, Circle, Clock, Plus, MoreVertical, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const GoalCard = ({ title, progress, deadline, status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-[#3fb950] bg-[#3fb950]/10 border-[#3fb950]/20';
      case 'In Progress': return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20';
      case 'Pending': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="card p-5 hover:border-[#8b949e] transition-all group cursor-pointer relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border inline-block mb-3 ${getStatusColor(status)}`}>
            {status}
          </div>
          <h4 className="font-bold text-[#f0f6fc] text-base leading-tight">{title}</h4>
        </div>
        <button className="p-1.5 hover:bg-[#30363d] rounded-md text-[#8b949e]"><MoreVertical size={16} /></button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-[#8b949e]">
          <span>Completion Rate</span>
          <span className="text-[#f0f6fc]">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#0d1117] border border-[#30363d] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${progress === 100 ? 'bg-[#3fb950]' : 'bg-indigo-500'}`}
          />
        </div>
        <div className="flex items-center gap-2 text-[#8b949e] text-[10px] font-bold uppercase tracking-widest pt-2">
          <Clock size={12} />
          <span>Target: {deadline}</span>
        </div>
      </div>
    </div>
  );
};

const Goals = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Strategic Objectives</h1>
          <p className="text-[#8b949e]">Organizational roadmap and key results for FY 2026</p>
        </div>
        <button className="btn btn-primary text-sm">
          <Plus size={16} className="mr-2" />
          Add Objective
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GoalCard 
          title="Product Infrastructure Phase 2" 
          progress={75} 
          deadline="Sep 30, 2026" 
          status="In Progress"
        />
        <GoalCard 
          title="Customer Retention Analysis" 
          progress={92} 
          deadline="Dec 15, 2026" 
          status="In Progress"
        />
        <GoalCard 
          title="APAC Region Hiring Blitz" 
          progress={100} 
          deadline="May 01, 2026" 
          status="Completed"
        />
        <GoalCard 
          title="Market Expansion Research" 
          progress={20} 
          deadline="Oct 10, 2026" 
          status="Pending"
        />
        <GoalCard 
          title="Core Network Infrastructure" 
          progress={45} 
          deadline="Nov 20, 2026" 
          status="In Progress"
        />
        <GoalCard 
          title="Security Compliance Audit" 
          progress={0} 
          deadline="Jan 15, 2027" 
          status="Pending"
        />
      </div>
    </div>
  );
};

export default Goals;
