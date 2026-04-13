import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllStudents,
  fetchAllTeachers,
  fetchAllClasses,
} from "../../redux/slices/adminSlice";

import {
  Users,
  GraduationCap,
  TrendingUp,
  TrendingDown,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  School,
  Calendar,
} from "lucide-react";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import {
  monthlyFinanceData,
  paymentMethodsData,
  dashboardStats,
} from "../../mock/dashboardData";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { students, status } = useSelector((state) => state.admin);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllStudents());
      dispatch(fetchAllTeachers());
      dispatch(fetchAllClasses());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center p-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-10">
      {/* Header & Greeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Welcome back,{" "}
            <span className="text-indigo-600">{user?.name || "Admin"}</span>! 👋
          </h1>
          <p className="text-slate-500 font-medium flex items-center gap-2">
            <Calendar size={16} />
            Here's what's happening in your school today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95">
            <Plus size={18} className="stroke-[3]" />
            New Admission
          </button>
        </div>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
        <DashboardStatCard
          title="Today's Income"
          value={dashboardStats.todayIncome}
          subValue={dashboardStats.monthIncome}
          subLabel="This Month"
          icon={<TrendingUp size={16} />}
          trend="+12.5%"
          isPositive={true}
          color="emerald"
        />

        <DashboardStatCard
          title="Today's Expense"
          value={dashboardStats.todayExpense}
          subValue={dashboardStats.monthExpense}
          subLabel="This Month"
          icon={<TrendingDown size={16} />}
          trend="-2.4%"
          isPositive={false}
          color="rose"
        />

        <DashboardStatCard
          title="Total Students"
          value={dashboardStats.totalStudents}
          subValue={dashboardStats.presentStudents}
          subLabel="Present Today"
          icon={<GraduationCap size={16} />}
          trend={`${(
            (dashboardStats.presentStudents / dashboardStats.totalStudents) *
            100
          ).toFixed(1)}%`}
          isPositive={true}
          color="indigo"
        />

        <DashboardStatCard
          title="Total Staff"
          value={dashboardStats.totalStaff}
          subValue={dashboardStats.presentStaff}
          subLabel="Present Today"
          icon={<Users size={16} />}
          trend="96.4%"
          isPositive={true}
          color="amber"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
        {/* Income vs Expense Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 xl:p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-500">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <h3 className="text-xl xl:text-2xl font-black text-slate-800 tracking-tight">
              Financial Overview
            </h3>
            <select className="bg-slate-50/80 border border-slate-200/80 text-sm font-bold px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm cursor-pointer hover:bg-slate-100 transition-colors min-w-[140px]">
              <option>Last 7 Months</option>
              <option>Year 2024</option>
            </select>
          </div>
          <div className="h-[18rem] w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyFinanceData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12, fontWeight: 600 }}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="income"
                  fill="#6366f1"
                  radius={[6, 6, 0, 0]}
                  barSize={24}
                />
                <Bar
                  dataKey="expense"
                  fill="#f43f5e"
                  radius={[6, 6, 0, 0]}
                  barSize={24}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment Methods Pie Chart */}
        <div className="bg-white p-6 xl:p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col group">
          <div className="flex items-center justify-between gap-3 mb-6">
            <h3 className="text-xl xl:text-2xl font-black text-slate-800 tracking-tight">
              Payment Methods
            </h3>
            <div className="animate-pulse">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
          <div className="h-[16rem] w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paymentMethodsData}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="85%"
                  paddingAngle={8}
                  dataKey="value"
                >
                  {paymentMethodsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 25px rgb(0 0 0 / 0.15)",
                    backgroundColor: "#fff",
                    padding: "12px 16px",
                  }}
                />
                <Legend
                  iconType="circle"
                  wrapperStyle={{
                    paddingTop: "16px",
                    fontWeight: 700,
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-gradient-to-br from-emerald-50/50 to-slate-50/50 p-5 xl:p-6 rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-all group/stats">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-emerald-200 shadow-sm flex items-center justify-center text-emerald-600 group-hover/stats:scale-110 transition-transform">
                <CreditCard size={18} className="stroke-[2]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  Total Collected
                </span>
                <h4 className="text-lg xl:text-xl font-black text-slate-800 tracking-tight">
                  {dashboardStats.monthIncome}
                </h4>
              </div>
            </div>

            <div className="mt-4 w-full">
              <div className="flex items-center justify-between mb-2 gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Collection Progress
                </span>
                <span className="text-xs font-black text-slate-700">85%</span>
              </div>
              <div className="w-full bg-slate-200/60 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Students */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-xl font-black text-slate-800 tracking-tight">
              Recent Enrolled Students
            </h3>
            <button className="text-indigo-600 text-sm font-bold hover:underline">
              View All
            </button>
          </div>

          <div className="overflow-x-auto px-4 pb-4">
            <table className="w-full">
              <thead>
                <tr className="text-slate-400 text-[11px] font-black uppercase tracking-widest">
                  <th className="px-6 py-4 text-left">Student Name</th>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Attendance</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {students.slice(0, 5).map((student) => (
                  <tr
                    key={student.id}
                    className="group hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-sm border border-slate-200 group-hover:bg-white group-hover:scale-110 transition-all">
                          {student.name.charAt(0)}
                        </div>
                        <span className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                          {student.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-500">
                      {student.classId}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-slate-100 rounded-full h-1.5 max-w-[80px]">
                          <div
                            className="bg-emerald-500 h-1.5 rounded-full"
                            style={{ width: `${student.attendance || 85}%` }}
                          />
                        </div>
                        <span className="text-xs font-black text-slate-600">
                          {student.attendance || 85}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-white border border-transparent hover:border-slate-200 rounded-xl transition-all">
                        <ArrowUpRight
                          size={16}
                          className="text-slate-400 group-hover:text-indigo-600"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-xl font-black text-white mb-4 relative z-10">
              Quick Launch 🚀
            </h3>
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <QuickActionItem
                label="Mark Attendance"
                icon={<ClipboardCheck size={18} />}
              />
              <QuickActionItem
                label="Collect Fees"
                icon={<CreditCard size={18} />}
              />
              <QuickActionItem
                label="Create Exam"
                icon={<ClipboardList size={18} />}
              />
              <QuickActionItem label="Send SMS" icon={<Mail size={18} />} />
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-[2.5rem] border border-indigo-100">
            <h4 className="font-black text-indigo-900 mb-3 flex items-center gap-2">
              <School size={18} />
              Academy Tip
            </h4>
            <p className="text-indigo-700 text-sm font-medium leading-relaxed">
              Did you know? Students with &gt;90% attendance show 40% better
              academic results.
            </p>
            <button className="mt-4 text-[11px] font-black uppercase text-indigo-600 hover:tracking-widest transition-all">
              Read More Analysis →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardStatCard({
  title,
  value,
  subValue,
  subLabel,
  icon,
  trend,
  isPositive,
  color,
}) {
  const colorStyles = {
    emerald: {
      bg: "bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-100",
      pill: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
      chart: "#10b981",
    },
    rose: {
      bg: "bg-rose-50 text-rose-600 border-rose-100 shadow-rose-100",
      pill: "bg-rose-500/10 text-rose-700 border-rose-500/20",
      chart: "#f43f5e",
    },
    indigo: {
      bg: "bg-indigo-50 text-indigo-600 border-indigo-100 shadow-indigo-100",
      pill: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
      chart: "#6366f1",
    },
    amber: {
      bg: "bg-amber-50 text-amber-600 border-amber-100 shadow-amber-100",
      pill: "bg-amber-500/10 text-amber-700 border-amber-500/20",
      chart: "#f59e0b",
    },
  };

  const style = colorStyles[color];

  // Dummy data for sparkline
  const sparklineData = [
    { value: 30 },
    { value: isPositive ? 45 : 20 },
    { value: isPositive ? 40 : 25 },
    { value: isPositive ? 60 : 15 },
    { value: isPositive ? 55 : 30 },
    { value: isPositive ? 80 : 10 },
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col relative overflow-hidden">
      {/* Subtle background glow on hover */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full pointer-events-none ${
          style.bg.split(" ")[0]
        }`}
      ></div>

      <div className="flex justify-between items-start mb-4 gap-3 relative z-10">
        <div
          className={`p-2 rounded-xl ${style.bg} border shadow-inner group-hover:scale-110 transition-transform shrink-0`}
        >
          {icon}
        </div>
        <div
          className={`flex items-center gap-1 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border backdrop-blur-md shrink-0 whitespace-nowrap ${style.pill}`}
        >
          {/* {isPositive ? <ArrowUpRight size={14} className="stroke-[3]" /> : <ArrowDownRight size={14} className="stroke-[3]" />} */}
          {trend}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest mb-1 truncate">
          {title}
        </p>
        <div className="flex items-end justify-between gap-2 mb-3">
          <h3 className="text-2xl xl:text-3xl font-black text-slate-800 tracking-tight shrink-0">
            {value}
          </h3>

          {/* Mini Sparkline Chart */}
          <div className="w-16 h-8 opacity-50 group-hover:opacity-100 transition-opacity shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparklineData}>
                <defs>
                  <linearGradient
                    id={`gradient-${color}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={style.chart}
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor={style.chart}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={style.chart}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill={`url(#gradient-${color})`}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-50 mt-auto">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter shrink-0">
            {subLabel}
          </span>
          <span className="text-xs xl:text-sm font-black text-slate-700 shrink-0 text-right">
            {subValue}
          </span>
        </div>
      </div>
    </div>
  );
}

function QuickActionItem({ label, icon }) {
  return (
    <button className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/5 active:scale-95 group/btn">
      <div className="p-2 bg-white/10 rounded-xl group-hover/btn:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-[10px] font-bold text-center leading-tight">
        {label}
      </span>
    </button>
  );
}

// Dummy icons for quick action items that weren't imported
import { ClipboardCheck, CreditCard, ClipboardList, Mail } from "lucide-react";
