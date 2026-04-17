import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout";

import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import ComingSoon from "./pages/ComingSoon";
import FrontOffice from "./pages/admin/front-office/FrontOffice";
import FeesCollection from "./pages/admin/fees/FeesCollection";

function App() {
  const user = useSelector((state) => state.auth.user);

  const getDashboard = () => {
    if (!user) return "/";

    switch (user.role) {
      case "admin":
        return "/admin";
      case "teacher":
        return "/teacher";
      case "student":
        return "/student";
      default:
        return "/";
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={
              user ? <Navigate to={getDashboard()} replace /> : <LandingPage />
            }
          />

          <Route
            path="/login"
            element={
              user ? <Navigate to={getDashboard()} replace /> : <LoginPage />
            }
          />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            user?.role === "admin" ? (
              <AdminLayout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          
          {/* New Admin Modules */}
          <Route path="front-office/*" element={<FrontOffice />} />
          <Route path="fees/*" element={<FeesCollection />} />
          <Route path="students" element={<ComingSoon title="Student Information" />} />
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
            user?.role === "teacher" ? (
              <TeacherLayout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<TeacherDashboard />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          
          {/* New Teacher Modules */}
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
            user?.role === "student" ? (
              <StudentLayout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />

          {/* New Student Modules */}
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
