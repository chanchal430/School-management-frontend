import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { UserPlus, Users, Phone, MessageSquare, Settings, Send, Inbox, LayoutDashboard, ChevronLeft } from "lucide-react";

import FrontOfficeOverview from "../../../components/admin/front-office/FrontOfficeOverview";
import AdmissionEnquiry from "../../../components/admin/front-office/AdmissionEnquiry";
import VisitorBook from "../../../components/admin/front-office/VisitorBook";
import PhoneLog from "../../../components/admin/front-office/PhoneLog";
import PostalDispatch from "../../../components/admin/front-office/PostalDispatch";
import PostalReceive from "../../../components/admin/front-office/PostalReceive";
import Complains from "../../../components/admin/front-office/Complains";
import FrontOfficeSettings from "../../../components/admin/front-office/FrontOfficeSettings";

export default function FrontOffice() {
  const navigate = useNavigate();
  const location = useLocation();

  const isOverview = location.pathname === "/admin/front-office" || location.pathname === "/admin/front-office/";

  const getHeaderTitle = () => {
    const path = location.pathname.split("/").pop();
    switch (path) {
      case "admission": return "Admission Enquiry";
      case "visitor": return "Visitor Book";
      case "phone": return "Phone Call Log";
      case "dispatch": return "Postal Dispatch";
      case "receive": return "Postal Receive";
      case "complain": return "Complains";
      case "settings": return "Setup Settings";
      default: return "Front Office Hub";
    }
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-0 opacity-50 pointer-events-none"></div>
        <div className="flex items-center gap-4 relative z-10">
          {!isOverview && (
            <button
              onClick={() => navigate("/admin/front-office")}
              className="p-2 hover:bg-slate-50 rounded-xl border border-slate-100 transition-colors text-slate-600"
              title="Back to Overview"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          <div className="space-y-1">
            <h1 className="text-2xl xl:text-3xl font-black text-slate-900 tracking-tight">
              {getHeaderTitle()}
            </h1>
            <p className="text-slate-500 font-medium text-sm">
              {isOverview 
                ? "Manage inquiries, visitors, calls, and administrative settings." 
                : "Manage and track details for this section."}
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Routes>
          <Route index element={<FrontOfficeOverview />} />
          <Route path="admission" element={<AdmissionEnquiry />} />
          <Route path="visitor" element={<VisitorBook />} />
          <Route path="phone" element={<PhoneLog />} />
          <Route path="dispatch" element={<PostalDispatch />} />
          <Route path="receive" element={<PostalReceive />} />
          <Route path="complain" element={<Complains />} />
          <Route path="settings" element={<FrontOfficeSettings />} />
        </Routes>
      </div>
    </div>
  );
}
