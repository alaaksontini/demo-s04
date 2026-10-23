import { Navigate } from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
