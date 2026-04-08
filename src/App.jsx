import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout";

import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";

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
          {/* Redirect if already logged in */}
          <Route
            path="/"
            element={
              user ? <Navigate to={getDashboard()} replace /> : <LandingPage />
            }
          />

          {/* Prevent logged in user from seeing login */}
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
        </Route>

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
