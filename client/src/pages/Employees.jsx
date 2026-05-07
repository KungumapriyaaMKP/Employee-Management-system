import React, { useState } from 'react';
import { 
  Search, 
  UserPlus, 
  Filter, 
  Mail, 
  MoreHorizontal,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const employeesData = [
  { id: 1, name: 'Sarah Chen', role: 'Principal Engineer', dept: 'Core Platform', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: 2, name: 'James Wilson', role: 'VP Product', dept: 'Product Strategy', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
  { id: 3, name: 'Elena Rodriguez', role: 'Design Director', dept: 'Experience Design', status: 'Remote', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena' },
  { id: 4, name: 'Marcus Thorne', role: 'Security Engineer', dept: 'Infastructure', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus' },
  { id: 5, name: 'Aisha Gupta', role: 'Head of People', dept: 'Human Capital', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha' },
];

const EmployeeRow = ({ employee }) => (
  <tr className="border-b border-[#30363d] hover:bg-[#161b22] transition-colors group">
    <td className="py-4 pl-4">
      <div className="flex items-center gap-3">
        <img src={employee.avatar} alt="" className="w-10 h-10 rounded-full bg-[#0d1117] border border-[#30363d]" />
        <div>
          <p className="font-semibold text-sm text-[#f0f6fc]">{employee.name}</p>
          <p className="text-[11px] text-[#8b949e]">{employee.role}</p>
        </div>
      </div>
    </td>
    <td className="py-4">
      <span className="text-xs text-[#f0f6fc]">
        {employee.dept}
      </span>
    </td>
    <td className="py-4">
      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${employee.status === 'Active' ? 'bg-[#3fb950]' : 'bg-[#d29922]'}`} />
        <span className="text-xs text-[#8b949e]">{employee.status}</span>
      </div>
    </td>
    <td className="py-4 pr-4 text-right">
      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 hover:bg-[#30363d] rounded-md text-[#8b949e] hover:text-[#f0f6fc]"><Mail size={14} /></button>
        <button className="p-2 hover:bg-[#30363d] rounded-md text-[#8b949e] hover:text-[#f0f6fc]"><ExternalLink size={14} /></button>
        <button className="p-2 hover:bg-[#30363d] rounded-md text-[#8b949e] hover:text-[#f0f6fc]"><MoreHorizontal size={14} /></button>
      </div>
    </td>
  </tr>
);

const Employees = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Personnel Directory</h1>
          <p className="text-[#8b949e]">Internal database of all authorized enterprise accounts</p>
        </div>
        <button className="btn btn-primary text-sm">
          <UserPlus size={16} className="mr-2" />
          Provision Account
        </button>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b949e]" size={16} />
          <input 
            type="text" 
            placeholder="Search by UUID, Name or Dept..." 
            className="input-field pl-10 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn bg-[#21262d] text-[#c9d1d9] border border-[#30363d] hover:bg-[#30363d] text-sm">
          <Filter size={16} className="mr-2" />
          Filter
          <ChevronDown size={14} className="ml-2" />
        </button>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#161b22] text-[#8b949e] text-[10px] uppercase tracking-widest font-bold">
                <th className="py-3 pl-4">Account Holder</th>
                <th className="py-3">Organization Unit</th>
                <th className="py-3">Status</th>
                <th className="py-3 pr-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map(emp => (
                <EmployeeRow key={emp.id} employee={emp} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-[#161b22] border-t border-[#30363d] flex justify-between items-center text-xs text-[#8b949e]">
          <span>Showing 5 of 1,240 records</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-[#21262d] border border-[#30363d] rounded hover:bg-[#30363d] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-[#21262d] border border-[#30363d] rounded hover:bg-[#30363d]">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
