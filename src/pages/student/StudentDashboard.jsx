import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentProfile } from '../../redux/slices/studentSlice';

export default function StudentDashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { profile, status } = useSelector((state) => state.student);

  useEffect(() => {
    if (user && user.id && status === 'idle') {
      dispatch(fetchStudentProfile(user.id));
    }
  }, [status, dispatch, user]);

  if (status === 'loading') {
    return <div className="p-8 text-center text-gray-500">Loading data...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Student Portal</h1>
      
      {/* Profile Overview */}
      {profile ? (
        <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900 border-b pb-2">My Profile</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{profile.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Class</dt>
                  <dd className="mt-1 text-sm text-gray-900">{profile.classId}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Overall Attendance</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${profile.attendance >= 75 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {profile.attendance}%
                    </span>
                  </dd>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h2 className="text-lg font-medium text-gray-900 border-b pb-2">Recent Marks</h2>
              <dl className="mt-4 grid grid-cols-3 gap-4 text-center">
                {Object.entries(profile.marks || {}).map(([subject, score]) => (
                  <div key={subject} className="bg-gray-50 p-4 rounded border">
                    <dt className="text-sm font-medium text-gray-500">{subject}</dt>
                    <dd className="mt-1 text-xl font-semibold text-emerald-600">{score}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
          Profile data not available yet.
        </div>
      )}
    </div>
  );
}
