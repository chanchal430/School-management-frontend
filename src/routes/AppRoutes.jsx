import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
const TeacherLayout = lazy(() => import("../layouts/TeacherLayout"));
const StudentLayout = lazy(() => import("../layouts/StudentLayout"));

// Public Pages
const LandingPage = lazy(() => import("../pages/landing/LandingPage"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Admin Pages
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
const FrontOffice = lazy(() => import("../pages/admin/front-office/FrontOffice"));
const FeesCollection = lazy(() => import("../pages/admin/fees/FeesCollection"));
const StudentInformation = lazy(() => import("../pages/admin/student/StudentInformation"));
const ComingSoon = lazy(() => import("../pages/ComingSoon"));

// Student Module Components (Nested)
const StudentHub = lazy(() => import("../components/admin/student/StudentHub"));
const StudentListing = lazy(() => import("../components/admin/student/StudentListing"));
const StudentForm = lazy(() => import("../components/admin/student/StudentForm"));
const StudentProfileView = lazy(() => import("../components/admin/student/StudentProfileView"));

const AdmissionReport = lazy(() => import("../components/admin/student/StudentSubModules").then(m => ({ default: m.AdmissionReport })));
const StudentHistory = lazy(() => import("../components/admin/student/StudentSubModules").then(m => ({ default: m.StudentHistory })));
const StudentLoginCredentials = lazy(() => import("../components/admin/student/StudentSubModules").then(m => ({ default: m.StudentLoginCredentials })));
const StudentCategory = lazy(() => import("../components/admin/student/StudentSubModules").then(m => ({ default: m.StudentCategory })));
const AssignStudentSubject = lazy(() => import("../components/admin/student/StudentSubModules").then(m => ({ default: m.AssignStudentSubject })));

const TeacherDashboard = lazy(() => import("../pages/teacher/TeacherDashboard"));
const StudentDashboard = lazy(() => import("../pages/student/StudentDashboard"));

// Helper for loading states
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AppRoutes() {
  const { user } = useSelector((state) => state.auth);

  const getDashboardPath = () => {
    if (!user) return "/";
    switch (user.role) {
      case "admin": return "/admin";
      case "teacher": return "/teacher";
      case "student": return "/student";
      default: return "/";
    }
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route 
            path="/" 
            element={user ? <Navigate to={getDashboardPath()} replace /> : <LandingPage />} 
          />
          <Route 
            path="/login" 
            element={user ? <Navigate to={getDashboardPath()} replace /> : <LoginPage />} 
          />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            user?.role === "admin" ? <AdminLayout /> : <Navigate to="/login" replace />
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          
          <Route path="front-office/*" element={<FrontOffice />} />
          <Route path="fees/*" element={<FeesCollection />} />
          
          {/* Centralized Student Module Nested Routing */}
          <Route path="student" element={<StudentInformation />}>
            <Route index element={<StudentHub />} />
            <Route path="list" element={<StudentListing />} />
            <Route path="add" element={<StudentForm />} />
            <Route path="edit/:id" element={<StudentForm />} />
            <Route path="view/:id" element={<StudentProfileView />} />
            <Route path="admission-report" element={<AdmissionReport />} />
            <Route path="history" element={<StudentHistory />} />
            <Route path="login-credentials" element={<StudentLoginCredentials />} />
            <Route path="category" element={<StudentCategory />} />
            <Route path="assign-subject" element={<AssignStudentSubject />} />
          </Route>

          <Route path="income" element={<ComingSoon title="Income Management" />} />
          <Route path="expense" element={<ComingSoon title="Expense Management" />} />
          <Route path="attendance" element={<ComingSoon title="Attendance System" />} />
          <Route path="academics" element={<ComingSoon title="Academic Management" />} />
          <Route path="hr" element={<ComingSoon title="Human Resource" />} />
          <Route path="homework" element={<ComingSoon title="Homework Module" />} />
          <Route path="library" element={<ComingSoon title="Library System" />} />
          <Route path="transport" element={<ComingSoon title="Transport Management" />} />
          <Route path="reports" element={<ComingSoon title="Report Center" />} />
          <Route path="communicate" element={<ComingSoon title="Communication Center" />} />
          <Route path="exam" element={<ComingSoon title="Examination Center" />} />
          <Route path="store" element={<ComingSoon title="Inventory Store" />} />
          <Route path="gallery" element={<ComingSoon title="Media Gallery" />} />
          <Route path="accounts" element={<ComingSoon title="Financial Accounts" />} />
          <Route path="settings" element={<ComingSoon title="General Settings" />} />
        </Route>

        {/* Teacher Routes */}
        <Route
          path="/teacher"
          element={
            user?.role === "teacher" ? <TeacherLayout /> : <Navigate to="/login" replace />
          }
        >
          <Route index element={<TeacherDashboard />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="attendance" element={<ComingSoon title="Student Attendance" />} />
          <Route path="classes" element={<ComingSoon title="My Classes" />} />
          <Route path="homework" element={<ComingSoon title="Assign Homework" />} />
          <Route path="exams" element={<ComingSoon title="Manage Exams" />} />
          <Route path="library" element={<ComingSoon title="Digital Library" />} />
          <Route path="reports" element={<ComingSoon title="Academic Reports" />} />
          <Route path="communicate" element={<ComingSoon title="Communication" />} />
          <Route path="settings" element={<ComingSoon title="Faculty Settings" />} />
        </Route>

        {/* Student Routes */}
        <Route
          path="/student"
          element={
            user?.role === "student" ? <StudentLayout /> : <Navigate to="/login" replace />
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="fees" element={<ComingSoon title="Fees & Dues" />} />
          <Route path="attendance" element={<ComingSoon title="My Attendance" />} />
          <Route path="homework" element={<ComingSoon title="My Homework" />} />
          <Route path="results" element={<ComingSoon title="Exam Results" />} />
          <Route path="library" element={<ComingSoon title="Digital Library" />} />
          <Route path="transport" element={<ComingSoon title="Transport Info" />} />
          <Route path="notices" element={<ComingSoon title="Notice Board" />} />
          <Route path="profile" element={<ComingSoon title="My Profile" />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;