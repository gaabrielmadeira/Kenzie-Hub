import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../Pages/dashboardPage";
import { LoginPage } from "../Pages/loginPage";
import { RegisterPage } from "../Pages/registerPage";
import { ProtectRoutes } from "./protectRoutes";
import { PublicRoutes } from "./publicRoutes";
import { TechProvider } from "../providers/techContext";

export const RoutesMain = () => {

  return (
    <Routes>
      <Route element={<ProtectRoutes />}>
          <Route path="/dashboard" element={<TechProvider> <DashboardPage /></TechProvider> } />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}