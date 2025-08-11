import { Routes, Route, Navigate } from "react-router-dom";
import Splash from "../../pages/Splash";
import Home from "../../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
