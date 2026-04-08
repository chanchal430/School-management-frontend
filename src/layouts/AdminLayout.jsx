import { useState, useRef, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import {
  UserCircle,
  LogOut,
  User,
  Settings,
  Calendar,
  ChevronDown,
  LayoutDashboard,
  Users,
  UserCheck,
  DollarSign,
  FileText,
} from "lucide-react";

export default function AdminLayout() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-slate-900 text-white flex flex-col shadow-xl z-20">
        <div className="p-6 text-2xl font-black tracking-tight border-b border-slate-800 flex items-center gap-2 text-indigo-400">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-sm">
            S
          </div>
          <span className="text-white">Admin Panel</span>
        </div>
        <nav className="flex-1 px-3 py-6 space-y-3">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={Users} label="Students" />
          <SidebarItem icon={UserCheck} label="Faculty" />
          <SidebarItem icon={DollarSign} label="Finances" />
          <SidebarItem icon={FileText} label="Reports" />
          <SidebarItem icon={Settings} label="Settings" />
        </nav>
        <div className="p-4 border-t border-slate-800">
          <div className="px-4 py-3 rounded-xl bg-slate-800/50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold ring-2 ring-indigo-500/30">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{user.name}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full min-w-0">
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-100 px-6 py-3 flex justify-between items-center h-16">
          <div className="flex flex-col">
            <h1 className="font-bold text-lg text-slate-800 hidden sm:block">
              School Management System
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full w-fit">
              <Calendar size={12} className="stroke-[2.5]" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Academic Year: 2024 - 2025
              </span>
            </div>
            {/* Notifications or other icons could go here */}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded-xl transition-all duration-200 group ring-1 ring-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm overflow-hidden border-2 border-white shadow-sm group-hover:ring-2 group-hover:ring-indigo-100 transition-all">
                  <User size={18} />
                </div>
                <div className="hidden md:flex flex-col items-start leading-tight">
                  <span className="text-sm font-semibold text-gray-800">
                    {user.name}
                  </span>
                  <span className="text-[10px] font-medium text-gray-500 uppercase">
                    Administrator
                  </span>
                </div>
                <ChevronDown
                  size={14}
                  className={`text-gray-400 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
                  <div className="px-4 py-3 border-b border-gray-50 mb-1">
                    <p className="text-sm font-bold text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user.email || "admin@school.com"}
                    </p>
                  </div>

                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-indigo-100">
                      <User size={16} />
                    </div>
                    <span className="font-medium">My Profile</span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <div className="p-1.5 bg-gray-50 rounded-lg">
                      <Settings size={16} />
                    </div>
                    <span className="font-medium">Settings</span>
                  </button>

                  <div className="my-1 border-t border-gray-50"></div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    <div className="p-1.5 bg-red-50 rounded-lg">
                      <LogOut size={16} />
                    </div>
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 bg-gray-50 overflow-auto">
          {/* Page Container */}
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  const Icon = icon;
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition
      ${
        active
          ? "bg-indigo-600 text-white shadow"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
}
