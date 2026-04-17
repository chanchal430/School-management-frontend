import { useState } from "react";
import { Search, Filter, User, ArrowRight, BookOpen, Clock, AlertCircle } from "lucide-react";

export default function CollectFees() {
  const [activeSearch, setActiveSearch] = useState("filter"); // "filter" or "keyword"
  
  const students = [
    { id: 1, name: "Rahul Sharma", admissionNo: "ADM001", class: "Class 1", section: "A", father: "Mahesh Sharma", dob: "12 May 2015", phone: "9876543210" },
    { id: 2, name: "Sneha Kapur", admissionNo: "ADM042", class: "Class 1", section: "B", father: "Ravi Kapur", dob: "20 Aug 2014", phone: "9988776655" },
    { id: 3, name: "Arjun Singh", admissionNo: "ADM105", class: "Class 2", section: "A", father: "Jaspreet Singh", dob: "05 Jan 2014", phone: "7766554433" },
    { id: 4, name: "Ishita Roy", admissionNo: "ADM089", class: "Class 1", section: "A", father: "Amit Roy", dob: "15 Sep 2015", phone: "9123456780" },
  ];

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 -z-0"></div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="flex bg-slate-100 p-1 rounded-2xl w-fit">
            <button 
              onClick={() => setActiveSearch("filter")}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeSearch === "filter" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Select Criteria
            </button>
            <button 
              onClick={() => setActiveSearch("keyword")}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeSearch === "keyword" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Search Keyword
            </button>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-blue-100 flex items-center gap-2">
                <Clock size={12} />
                Recent Search: XII-A
             </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end animate-in fade-in slide-in-from-top-2 duration-300">
          {activeSearch === "filter" ? (
            <>
              <div className="space-y-1.5 flex-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Class</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer">
                  <option value="">Select Class</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                </select>
              </div>
              <div className="space-y-1.5 flex-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Section</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer">
                  <option value="">Select Section</option>
                  <option>A</option>
                  <option>B</option>
                </select>
              </div>
              <div className="lg:col-span-2">
                <button className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-lg active:scale-95 group">
                  <Search size={18} />
                  Fetch Students
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </>
          ) : (
            <div className="md:col-span-2 lg:col-span-4 flex items-end gap-4">
              <div className="flex-1 space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Search Keyword</label>
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search by Student Name, Admission No, Roll No..." 
                    className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-4 py-3.5 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>
              <button className="bg-slate-900 text-white h-[52px] px-8 rounded-2xl font-black text-sm flex items-center gap-3 hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Result Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
               <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-800 tracking-tight">Student List</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-0.5">Showing 4 results for Class 1</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-3 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-xl transition-all">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                <th className="px-8 py-5">Student Information</th>
                <th className="px-8 py-5">Admission No</th>
                <th className="px-8 py-5">Class/Section</th>
                <th className="px-8 py-5">Guardian Info</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {students.map((student) => (
                <tr key={student.id} className="group hover:bg-slate-50/50 transition-all duration-300">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-slate-900 tracking-tight">{student.name}</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mt-1">DOB: {student.dob}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black rounded-lg uppercase tracking-widest">
                       <AlertCircle size={12} className="text-blue-500" />
                       {student.admissionNo}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <p className="text-sm font-black text-slate-700 leading-none">{student.class}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Section {student.section}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <p className="text-sm font-black text-slate-700 leading-none">{student.father}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{student.phone}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button 
                      onClick={() => navigate(`/admin/fees/collect/${student.id}`)}
                      className="inline-flex items-center gap-3 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white px-5 py-2.5 rounded-xl text-sm font-black transition-all hover:shadow-lg hover:shadow-emerald-100 active:scale-95 border border-emerald-100/50 group/btn"
                    >
                      Collect Fees
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
