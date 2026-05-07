import React, { useState } from 'react';
import { 
  Search, 
  UserPlus, 
  Filter, 
  Mail, 
  Phone, 
  MoreHorizontal,
  ExternalLink
} from 'lucide-react';

const employeesData = [
  { id: 1, name: 'Sarah Chen', role: 'Senior Developer', dept: 'Engineering', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: 2, name: 'James Wilson', role: 'Product Manager', dept: 'Product', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
  { id: 3, name: 'Elena Rodriguez', role: 'UI/UX Designer', dept: 'Design', status: 'On Leave', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena' },
  { id: 4, name: 'Marcus Thorne', role: 'QA Engineer', dept: 'Engineering', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus' },
  { id: 5, name: 'Aisha Gupta', role: 'HR Specialist', dept: 'People', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha' },
];

const EmployeeRow = ({ employee }) => (
  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
    <td className="py-4 pl-4">
      <div className="flex items-center gap-3">
        <img src={employee.avatar} alt="" className="w-10 h-10 rounded-full bg-slate-800" />
        <div>
          <p className="font-semibold">{employee.name}</p>
          <p className="text-xs text-gray-400">{employee.role}</p>
        </div>
      </div>
    </td>
    <td className="py-4">
      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
        {employee.dept}
      </span>
    </td>
    <td className="py-4">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${employee.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
        <span className="text-sm">{employee.status}</span>
      </div>
    </td>
    <td className="py-4">
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white"><Mail size={16} /></button>
        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white"><ExternalLink size={16} /></button>
        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white"><MoreHorizontal size={16} /></button>
      </div>
    </td>
  </tr>
);

const Employees = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Employee Directory 👥</h1>
          <p className="text-gray-400">Manage and view your team members.</p>
        </div>
        <button className="btn-primary">
          <UserPlus size={18} />
          Add Employee
        </button>
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, role or department..." 
            className="glass-input pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="glass-card flex items-center gap-2 py-2 px-4 text-sm font-medium hover:bg-white/5">
          <Filter size={18} />
          Filters
        </button>
      </div>

      <div className="glass-card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-sm">
                <th className="py-4 pl-4 font-medium uppercase tracking-wider">Employee</th>
                <th className="py-4 font-medium uppercase tracking-wider">Department</th>
                <th className="py-4 font-medium uppercase tracking-wider">Status</th>
                <th className="py-4 font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map(emp => (
                <EmployeeRow key={emp.id} employee={emp} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
