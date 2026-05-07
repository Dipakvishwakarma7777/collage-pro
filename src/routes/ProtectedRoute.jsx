import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, requiredRole = null }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole") || "student";

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    const roleRoutes = {
      student: "/student-dashboard",
      faculty: "/faculty-dashboard",
      admin: "/admin-dashboard",
    };
    return <Navigate to={roleRoutes[userRole] || "/login"} />;
  }

  return children;
}

export default ProtectedRoute;

