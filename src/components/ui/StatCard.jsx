export default function StatCard({ title, value, icon, color, trend }) {
  const colorStyles = {
    emerald: { bg: "bg-emerald-50 text-emerald-600 border-emerald-100", pill: "bg-emerald-500/10 text-emerald-700" },
    rose: { bg: "bg-rose-50 text-rose-600 border-rose-100", pill: "bg-rose-500/10 text-rose-700" },
    indigo: { bg: "bg-indigo-50 text-indigo-600 border-indigo-100", pill: "bg-indigo-500/10 text-indigo-700" },
    amber: { bg: "bg-amber-50 text-amber-600 border-amber-100", pill: "bg-amber-500/10 text-amber-700" },
    slate: { bg: "bg-slate-50 text-slate-600 border-slate-100", pill: "bg-slate-500/10 text-slate-700" },
  };

  const style = colorStyles[color] || colorStyles.slate;

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`p-2.5 rounded-xl ${style.bg} border shadow-sm group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        {trend && (
          <div className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${style.pill}`}>
            {trend}
          </div>
        )}
      </div>
      <div className="relative z-10 mt-auto">
        <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest mb-1">
          {title}
        </p>
        <h3 className="text-2xl xl:text-3xl font-black text-slate-800 tracking-tight">
          {value}
        </h3>
      </div>
      <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full pointer-events-none ${style.bg.split(' ')[0]}`}></div>
    </div>
  );
}
