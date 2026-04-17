import { useState } from "react";
import { Plus, Edit2, Trash2, Search, Filter, Tag } from "lucide-react";

export default function FeesType() {
  const types = [
    { id: 1, name: "January Tuition", group: "Monthly Fees", code: "TUI-JAN", description: "Tuition fee for Jan 2024" },
    { id: 2, name: "Admission Fee 2024", group: "Admission Fees", code: "ADM-24", description: "One-time admission charge" },
    { id: 3, name: "Quarterly Exam", group: "Exam Fees", code: "EXM-Q1", description: "First quarter exam charges" },
    { id: 4, name: "Van Route A", group: "Transport Fees", code: "TRA-RA", description: "Monthly transport for Route A" },
    { id: 5, name: "Sports Annual", group: "Admission Fees", code: "SPT-AN", description: "Annual sports development fund" },
  ];

  const groups = ["Monthly Fees", "Admission Fees", "Exam Fees", "Transport Fees", "Library Fees"];

  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Left: Create Form */}
      <div className="w-full xl:w-96 flex-shrink-0">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm sticky top-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
              <Plus size={20} />
            </div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Add Fee Type</h2>
          </div>

          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Type Name</label>
              <input 
                type="text" 
                placeholder="e.g. Activity Fee" 
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-rose-500/20 transition-all"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Fee Group</label>
              <select className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-rose-500/20 transition-all appearance-none cursor-pointer">
                <option value="">Select Group</option>
                {groups.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Fee Code</label>
              <input 
                type="text" 
                placeholder="e.g. ACT-01" 
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-rose-500/20 transition-all"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Description</label>
              <textarea 
                placeholder="Details..." 
                rows={3}
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-rose-500/20 transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200 mt-2">
              Save Fee Type
            </button>
          </form>
        </div>
      </div>

      {/* Right: List View */}
      <div className="flex-1 space-y-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search types..." 
                className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-rose-500/20 transition-all"
              />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
              <Filter size={18} />
              Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Code</th>
                  <th className="px-4 py-4">Group</th>
                  <th className="px-4 py-4">Description</th>
                  <th className="px-4 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {types.map((type) => (
                  <tr key={type.id} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center group-hover:bg-rose-50 group-hover:text-rose-500 transition-colors">
                          <Tag size={14} />
                        </div>
                        <span className="font-black text-slate-700">{type.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 font-bold text-xs text-slate-500 uppercase tracking-wider">{type.code}</td>
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black rounded-lg uppercase tracking-widest group-hover:bg-rose-50 group-hover:text-rose-600">
                        {type.group}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-slate-500 max-w-xs truncate">{type.description}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white hover:text-blue-500 rounded-xl transition-all text-slate-400 shadow-sm border border-transparent hover:border-blue-100">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 hover:bg-white hover:text-rose-500 rounded-xl transition-all text-slate-400 shadow-sm border border-transparent hover:border-rose-100">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
