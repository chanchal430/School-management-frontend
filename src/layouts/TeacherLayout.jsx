import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

export default function TeacherLayout() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user || user.role !== 'teacher') {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <div className="w-full md:w-64 bg-indigo-900 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-indigo-800">Teacher Portal</div>
        <nav className="flex-1 p-4 space-y-2">
          <div className="block px-4 py-2 bg-indigo-800 rounded text-sm cursor-pointer">Dashboard</div>
          <div className="block px-4 py-2 hover:bg-indigo-800 rounded text-sm cursor-pointer">My Classes</div>
        </nav>
      </div>
      
      <div className="flex-1 flex flex-col w-full">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="font-semibold text-lg hidden sm:block">School Management System</div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Teacher: {user.name}</span>
            <button onClick={handleLogout} className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded">Logout</button>
          </div>
        </header>
        
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
