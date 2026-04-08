import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherClasses } from '../../redux/slices/teacherSlice';

export default function TeacherDashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { classes, status } = useSelector((state) => state.teacher);

  useEffect(() => {
    if (user && user.id && status === 'idle') {
      dispatch(fetchTeacherClasses(user.id));
    }
  }, [status, dispatch, user]);

  if (status === 'loading') {
    return <div className="p-8 text-center text-gray-500">Loading data...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Welcome, {user?.name}</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 border-l-4 border-indigo-500">
          <dt className="text-sm font-medium text-gray-500 truncate">My Classes</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">{classes.length}</dd>
        </div>
      </div>

      {/* Tables Placeholder */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Assigned Classes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Count</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {classes.map((cls) => (
                <tr key={cls.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cls.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.studentCount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 hover:text-indigo-900 cursor-pointer">View Details</td>
                </tr>
              ))}
              {classes.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">No classes assigned.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
