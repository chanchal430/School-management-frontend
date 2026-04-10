export const monthlyFinanceData = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
];

export const paymentMethodsData = [
  { name: 'Cash', value: 99.59, color: '#10b981' },
  { name: 'UPI', value: 0.41, color: '#6366f1' },
  { name: 'Card', value: 12.00, color: '#f59e0b' },
];

export const recentFeesData = [
  { id: 1, student: "Rahul Sharma", amount: 5000, status: "Paid", date: "2024-03-20" },
  { id: 2, student: "Sneha Kapur", amount: 3500, status: "Pending", date: "2024-03-19" },
  { id: 3, student: "Amit Verma", amount: 4200, status: "Paid", date: "2024-03-18" },
  { id: 4, student: "Priya Das", amount: 2800, status: "Paid", date: "2024-03-17" },
];

export const dashboardStats = {
  todayIncome: "₹45,200",
  monthIncome: "₹12,45,000",
  todayExpense: "₹12,800",
  monthExpense: "₹4,15,000",
  totalStudents: 1240,
  presentStudents: 1150,
  absentStudents: 90,
  totalStaff: 85,
  presentStaff: 82,
  absentStaff: 3,
};

// Teacher Specific Data
export const teacherClassPerformance = [
  { name: 'Class 10-A', avgMarks: 85, attendance: 92 },
  { name: 'Class 10-B', avgMarks: 78, attendance: 88 },
  { name: 'Class 9-C', avgMarks: 92, attendance: 95 },
  { name: 'Class 8-A', avgMarks: 70, attendance: 82 },
];

export const teacherWeeklySchedule = [
  { time: '09:00 AM', subject: 'Mathematics', class: '10-A', room: 'Room 201' },
  { time: '10:30 AM', subject: 'Physics', class: '12-B', room: 'Lab 1' },
  { time: '12:00 PM', subject: 'Mathematics', class: '9-C', room: 'Room 105' },
  { time: '02:00 PM', subject: 'Doubt Session', class: 'Mixed', room: 'Library' },
];

// Student Specific Data
export const studentMarksProgression = [
  { exam: 'Unit 1', math: 85, science: 78, english: 92 },
  { exam: 'Unit 2', math: 88, science: 82, english: 90 },
  { exam: 'Quarterly', math: 82, science: 85, english: 88 },
  { exam: 'Unit 3', math: 92, science: 89, english: 94 },
  { exam: 'Half Yearly', math: 95, science: 92, english: 93 },
];

export const studentHomework = [
  { id: 1, subject: 'Mathematics', task: 'Solve Exercise 5.2', dueDate: 'Tomorrow', status: 'Pending' },
  { id: 2, subject: 'Science', task: 'Physics Lab Report', dueDate: '12 Apr', status: 'In Progress' },
  { id: 3, subject: 'English', task: 'Essay on Shakespeare', dueDate: 'Completed', status: 'Done' },
];

export const upcomingExams = [
  { subject: 'Math Finals', date: '25 Apr 2024', time: '10:00 AM' },
  { subject: 'Physics Practical', date: '28 Apr 2024', time: '09:00 AM' },
  { subject: 'History Unit', date: '02 May 2024', time: '11:30 AM' },
];
