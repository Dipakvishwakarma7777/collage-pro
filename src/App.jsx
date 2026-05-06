import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";

import AttendanceScanner from "./pages/student/AttendanceScanner";
import PaymentPage from "./pages/student/PaymentPage";
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

      <Route path="/attendance" element={<AttendanceScanner />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/ai-recommendation" element={<AIRecommendation />} />

      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <AttendanceScanner />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <PaymentPage />
          </ProtectedRoute>
        }
      />

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
