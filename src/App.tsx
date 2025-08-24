import AppRoutes from "./app/routes/AppRoutes";
import BottomNavBar from "./components/layout/BottomNavBar";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";

  return (
    <div className="mobile-wrapper">
      <div className="mobile-container relative pb-16">
        <AppRoutes />
        {showNavBar && <BottomNavBar />}
      </div>
    </div>
  );
}
