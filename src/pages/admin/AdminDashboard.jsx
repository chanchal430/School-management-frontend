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
  School,
  Plus,
} from "lucide-react";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const { students, teachers, classes, status } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllStudents());
      dispatch(fetchAllTeachers());
      dispatch(fetchAllClasses());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-gray-500">
            Overview of your school management system
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition">
          <Plus size={18} />
          Add Student
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Students"
          value={students.length}
          icon={<GraduationCap />}
          color="blue"
        />

        <StatCard
          title="Total Teachers"
          value={teachers.length}
          icon={<Users />}
          color="green"
        />

        <StatCard
          title="Total Classes"
          value={classes.length}
          icon={<School />}
          color="purple"
        />
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <QuickAction label="Add Student" />
              <QuickAction label="Add Teacher" />
              <QuickAction label="Create Class" />
              <QuickAction label="Send Notice" />
            </div>
          </div>

          {/* Students Table */}
          <div className="bg-white rounded-2xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="font-semibold text-gray-900">
                Recent Students
              </h3>
            </div>

            <table className="w-full">
              <thead className="bg-gray-50 text-sm text-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Class</th>
                  <th className="px-6 py-3 text-left">Attendance</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {students.slice(0, 5).map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">
                      {student.name}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {student.classId}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-50 text-green-600">
                        {student.attendance}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Recent Activity
            </h3>

            <div className="space-y-4 text-sm">
              <Activity text="New student added" />
              <Activity text="Teacher updated profile" />
              <Activity text="Class schedule updated" />
              <Activity text="Attendance marked today" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6">
            <h3 className="font-semibold mb-2">
              School Announcement
            </h3>

            <p className="text-sm text-blue-100">
              Mid-term exams start next week. Please update records.
            </p>

            <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
              View Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Stat Card */
function StatCard({ title, value, icon, color }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-3xl font-semibold mt-1">
            {value}
          </h3>
        </div>

        <div className={`p-3 rounded-xl ${colors[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

/* Quick Action */
function QuickAction({ label }) {
  return (
    <button className="p-4 rounded-xl border hover:bg-gray-50 transition text-sm font-medium">
      {label}
    </button>
  );
}

/* Activity */
function Activity({ text }) {
  return (
    <div className="flex gap-3">
      <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
      <p className="text-gray-600">{text}</p>
    </div>
  );
}