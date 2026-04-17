import { useNavigate } from "react-router-dom";
import { 
  Users, 
  CreditCard, 
  ClipboardList, 
  Settings, 
  FileText, 
  Wallet,
  ArrowRight,
  TrendingUp,
  Clock,
  AlertCircle
} from "lucide-react";

export default function FeesOverview() {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Collect Fees",
      description: "Search students and collect pending fees.",
      icon: <Users size={24} />,
      path: "collect",
      color: "bg-blue-500",
      lightColor: "bg-blue-50"
    },
    {
      title: "Search Fees Due",
      description: "Find students with unpaid balances.",
      icon: <AlertCircle size={24} />,
      path: "due",
      color: "bg-amber-500",
      lightColor: "bg-amber-50"
    },
    {
      title: "Fees Master",
      description: "Setup and manage fee structures.",
      icon: <Settings size={24} />,
      path: "master",
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50"
    },
    {
      title: "Fees Group",
      description: "Group fees logically (e.g. Monthly, Admission).",
      icon: <CreditCard size={24} />,
      path: "group",
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50"
    },
    {
      title: "Fees Type",
      description: "Define specific fee types (e.g. Library, Exam).",
      icon: <ClipboardList size={24} />,
      path: "type",
      color: "bg-rose-500",
      lightColor: "bg-rose-50"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Collection" 
          value="₹4,25,000" 
          change="+12.5%" 
          icon={<TrendingUp size={20} />} 
          color="text-emerald-600" 
          bgColor="bg-emerald-50" 
        />
        <StatCard 
          title="Fees Due" 
          value="₹1,12,000" 
          change="8 Students" 
          icon={<Clock size={20} />} 
          color="text-amber-600" 
          bgColor="bg-amber-50" 
        />
        <StatCard 
          title="Total Discount" 
          value="₹15,000" 
          change="Last 30 days" 
          icon={<Wallet size={20} />} 
          color="text-blue-600" 
          bgColor="bg-blue-50" 
        />
        <StatCard 
          title="Fine Collected" 
          value="₹2,500" 
          change="+₹400 today" 
          icon={<AlertCircle size={20} />} 
          color="text-rose-600" 
          bgColor="bg-rose-50" 
        />
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className="group flex flex-col p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 ${item.lightColor} rounded-full -mr-8 -mt-8 opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>
            
            <div className={`w-12 h-12 ${item.lightColor} ${item.color.replace('bg-', 'text-')} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
              {item.icon}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 font-medium text-sm mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all uppercase tracking-wider">
                Explore Now
                <ArrowRight size={16} className={item.color.replace('bg-', 'text-')} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon, color, bgColor }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-2xl ${bgColor} ${color}`}>
          {icon}
        </div>
        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${bgColor} ${color}`}>
          {change}
        </span>
      </div>
      <div>
        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{title}</p>
        <h3 className="text-2xl font-black text-slate-900">{value}</h3>
      </div>
    </div>
  );
}
