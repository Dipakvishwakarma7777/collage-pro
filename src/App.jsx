import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";

import AttendanceScanner from "./pages/student/AttendanceScanner";
import PaymentPage from "./pages/student/PaymentPage";
import Certificates from "./pages/student/Certificates";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentEvents from "./pages/student/StudentEvents";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageEvents from "./pages/admin/ManageEvents";
import AdminUserManagement from "./pages/admin/AdminUserManagement";
import AdminReportsAnalytics from "./pages/admin/AdminReportsAnalytics";

import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import FacultyEventManagement from "./pages/faculty/FacultyEventManagement";
import FacultyStudentTracking from "./pages/faculty/FacultyStudentTracking";

import CalendarPage from "./pages/CalendarPage";
import ChatPage from "./pages/ChatPage";
import AIRecommendation from "./pages/AIRecommendation";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />

      {/* Student Routes */}
      <Route
        path="/student-dashboard"
        element={
          <ProtectedRoute requiredRole="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student-profile"
        element={
          <ProtectedRoute requiredRole="student">
            <StudentProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student-events"
        element={
          <ProtectedRoute requiredRole="student">
            <StudentEvents />
          </ProtectedRoute>
        }
      />

      <Route
        path="/attendance"
        element={
          <ProtectedRoute requiredRole="student">
            <AttendanceScanner />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment"
        element={
          <ProtectedRoute requiredRole="student">
            <PaymentPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/certificates"
        element={
          <ProtectedRoute requiredRole="student">
            <Certificates />
          </ProtectedRoute>
        }
      />

      {/* Faculty Routes */}
      <Route
        path="/faculty-dashboard"
        element={
          <ProtectedRoute requiredRole="faculty">
            <FacultyDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/faculty-event-management"
        element={
          <ProtectedRoute requiredRole="faculty">
            <FacultyEventManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/faculty-student-tracking"
        element={
          <ProtectedRoute requiredRole="faculty">
            <FacultyStudentTracking />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-events"
        element={
          <ProtectedRoute requiredRole="admin">
            <ManageEvents />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-user-management"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminUserManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-reports"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminReportsAnalytics />
          </ProtectedRoute>
        }
      />

      {/* Common Routes */}
      <Route
        path="/calendar"
        element={
          <ProtectedRoute>
            <CalendarPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ai-recommendation"
        element={
          <ProtectedRoute>
            <AIRecommendation />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
