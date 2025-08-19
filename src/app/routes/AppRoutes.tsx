import { Routes, Route, Navigate } from "react-router-dom";
import Splash from "../../pages/Splash";
import Home from "../../pages/Home";
import Community from "../../pages/Community";
import MyStorage from "../../pages/MyStorage";
import Analysis from "../../pages/Analysis";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/my-storage" element={<MyStorage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/analysis" element={<Analysis />} />
    </Routes>
  );
}
