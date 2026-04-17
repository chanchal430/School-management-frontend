import { useState } from "react";
import { 
  User, 
  ArrowLeft, 
  CreditCard, 
  History, 
  Receipt, 
  Info, 
  AlertCircle, 
  Printer, 
  CheckCircle2, 
  IndianRupee,
  Clock,
  Plus,
  ArrowRight,
  TrendingUp,
  X
} from "lucide-react";

export default function FeeCollectionDetail() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  const student = {
    name: "Rahul Sharma",
    admissionNo: "ADM001",
    rollNo: "12",
    class: "Class 1 (A)",
    father: "Mahesh Sharma",
    mother: "Sunita Sharma",
    phone: "9876543210",
    address: "H.No 123, Sector 4, New Delhi",
    joiningDate: "01 Apr 2023"
  };

  const ledger = [
    { id: 1, group: "Library Fees", code: "LIB-01", dueDate: "10 Jan 2024", status: "Paid", amount: "500", fine: "0", discount: "0", paid: "500", balance: "0" },
    { id: 2, group: "Monthly Fees", code: "JAN-TUI", dueDate: "10 Jan 2024", status: "Partial", amount: "2500", fine: "100", discount: "0", paid: "1000", balance: "1600" },
    { id: 3, group: "Exam Fees", code: "EXM-Q1", dueDate: "20 Jan 2024", status: "Unpaid", amount: "500", fine: "0", discount: "0", paid: "0", balance: "500" },
    { id: 4, group: "Monthly Fees", code: "FEB-TUI", dueDate: "10 Feb 2024", status: "Unpaid", amount: "2500", fine: "0", discount: "0", paid: "0", balance: "2500" },
  ];

  const payments = [
    { id: "PAY-1024", date: "12 Jan 2024", mode: "Cash", amount: "500", group: "Library Fees" },
    { id: "PAY-1089", date: "15 Jan 2024", mode: "Online", amount: "1000", group: "Monthly Fees (Jan)" },
  ];

  return (
    <div className="space-y-8 pb-20">
      {/* Top Banner / Student Brief */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-0 opacity-40"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 flex-1">
          <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-4xl font-black shadow-xl shadow-emerald-100 ring-4 ring-white">
            {student.name.charAt(0)}
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">{student.name}</h1>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-full uppercase tracking-widest px-3 border border-emerald-200">Active Student</span>
              </div>
              <p className="text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2">
                <Info size={16} className="text-emerald-500" />
                Admission No: <span className="text-slate-900 font-bold">{student.admissionNo}</span> • Roll: <span className="text-slate-900 font-bold">{student.rollNo}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-50">
              <InfoItem label="Class" value={student.class} />
              <InfoItem label="Father Name" value={student.father} />
              <InfoItem label="Phone" value={student.phone} />
              <InfoItem label="Joining Date" value={student.joiningDate} />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-between bg-slate-900 p-8 rounded-[2rem] text-white min-w-[280px]">
           <div className="space-y-1">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total Outstanding</p>
              <h2 className="text-4xl font-black tracking-tighter">₹4,600</h2>
           </div>
           
           <button 
             onClick={() => setShowPaymentModal(true)}
             className="mt-6 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black transition-all shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2"
           >
              <CreditCard size={18} />
              Collect Fees
           </button>
        </div>
      </div>

      {/* Main Ledger & History */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ledger Table */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                 <h3 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                    <Receipt size={22} className="text-emerald-600" />
                    Fees Ledger
                 </h3>
                 <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-emerald-600 bg-white border border-slate-100 rounded-xl transition-all shadow-sm">
                       <Printer size={18} />
                    </button>
                 </div>
              </div>

              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50">
                          <th className="px-6 py-4">Fees Group/Code</th>
                          <th className="px-6 py-4">Due Date</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Amount</th>
                          <th className="px-6 py-4">Paid</th>
                          <th className="px-6 py-4">Balance</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {ledger.map(row => (
                         <tr key={row.id} className="group hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-5">
                               <p className="font-black text-slate-800 text-sm">{row.group}</p>
                               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{row.code}</p>
                            </td>
                            <td className="px-6 py-5 text-xs font-bold text-slate-500 lowercase flex items-center gap-2 mt-2">
                               <Clock size={12} className="text-amber-500" />
                               {row.dueDate}
                            </td>
                            <td className="px-6 py-5">
                               <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-lg ${
                                 row.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                                 row.status === 'Partial' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                               }`}>
                                 {row.status}
                               </span>
                            </td>
                            <td className="px-6 py-5 font-bold text-slate-700 text-sm">₹{row.amount}</td>
                            <td className="px-6 py-5 font-bold text-emerald-600 text-sm">₹{row.paid}</td>
                            <td className="px-6 py-5 font-black text-slate-900 text-sm">₹{row.balance}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        {/* Sidebar: Payment History */}
        <div className="space-y-6">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
              <h3 className="text-xl font-black text-slate-800 tracking-tight mb-8 flex items-center gap-2">
                 <History size={22} className="text-indigo-600" />
                 Payment History
              </h3>

              <div className="space-y-4 flex-1">
                 {payments.map(pay => (
                   <div key={pay.id} className="p-4 rounded-3xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-indigo-100 transition-all group">
                      <div className="flex justify-between items-start mb-2">
                         <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">{pay.id}</p>
                         <p className="text-[10px] font-bold text-slate-400 capitalize">{pay.date}</p>
                      </div>
                      <h4 className="font-black text-slate-800 text-sm leading-tight mb-4">{pay.group}</h4>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100/50">
                         <div className="flex flex-col">
                            <span className="text-[8px] font-black uppercase text-slate-400">Amount</span>
                            <span className="text-lg font-black text-slate-900">₹{pay.amount}</span>
                         </div>
                         <button className="p-2 bg-white text-slate-400 hover:text-indigo-600 rounded-xl transition-all shadow-sm opacity-0 group-hover:opacity-100">
                            <Printer size={16} />
                         </button>
                      </div>
                   </div>
                 ))}
                 
                 {payments.length === 0 && (
                   <div className="flex flex-col items-center justify-center py-10 opacity-30 text-center">
                      <AlertCircle size={40} className="mb-4" />
                      <p className="font-bold">No payments found</p>
                   </div>
                 )}
              </div>

              <button className="mt-8 w-full py-4 bg-slate-100 text-slate-600 hover:bg-indigo-600 hover:text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all">
                 View All Transactions
              </button>
           </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
           <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowPaymentModal(false)}></div>
           <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-emerald-50/50">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100">
                       <Plus size={24} />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-slate-900 tracking-tight">Collect Payment</h3>
                       <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest font-black">Fee Receipt Entry</p>
                    </div>
                 </div>
                 <button onClick={() => setShowPaymentModal(false)} className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-rose-500 transition-all">
                    <X size={24} />
                 </button>
              </div>
              
              <div className="p-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Date</label>
                       <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500/20" />
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Amount (₹)</label>
                       <div className="relative">
                          <IndianRupee size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input type="number" placeholder="4600" className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500/20" />
                       </div>
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Payment Mode</label>
                       <select className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500/20 appearance-none">
                          <option>Cash</option>
                          <option>Online</option>
                          <option>Cheque</option>
                          <option>Bank Transfer</option>
                       </select>
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Discount (₹)</label>
                       <input type="number" placeholder="0" className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500/20" />
                    </div>
                 </div>

                 <div className="space-y-1.5 mb-8">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Payment Notes</label>
                    <textarea placeholder="e.g. Paid by father via UBI app" rows={3} className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500/20 resize-none"></textarea>
                 </div>

                 <div className="flex items-center gap-4">
                    <button onClick={() => setShowPaymentModal(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black text-sm hover:bg-slate-200 transition-all">
                       Cancel
                    </button>
                    <button className="flex-[2] py-4 bg-slate-900 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 group">
                       <CheckCircle2 size={20} />
                       Confirm Payment
                       <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{label}</p>
      <p className="text-sm font-black text-slate-800">{value}</p>
    </div>
  );
}
