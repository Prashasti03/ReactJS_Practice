import { Navigate } from "react-router-dom";

function Dashboard() {
  const isAuth = localStorage.getItem("isAuth");

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome! You are logged in.</p>
    </div>
  );
}

export default Dashboard;