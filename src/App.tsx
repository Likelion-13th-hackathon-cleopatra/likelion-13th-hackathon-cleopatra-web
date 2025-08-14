import AppRoutes from "./app/routes/AppRoutes";
import BottomNavBar from "./components/layout/BottomNavBar";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";

  return (
    <div className="relative min-h-screen pb-16">
      <AppRoutes />
      {showNavBar && <BottomNavBar />}
    </div>
  );
}
