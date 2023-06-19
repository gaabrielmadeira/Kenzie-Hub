import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../Pages/dashboardPage";
import { LoginPage } from "../Pages/loginPage";
import { RegisterPage } from "../Pages/registerPage";
import { useState } from "react";

export const RoutesMain = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");

  return (
    <Routes>
      <Route path="/Dashboard" element={<DashboardPage user={user} setUser={setUser}/>} />
      <Route path="/" element={<LoginPage loading={loading} setLoading={setLoading} setUser={setUser}/>} />
      <Route path="/Register" element={<RegisterPage loading={loading} setLoading={setLoading}/>} />
    </Routes>
  )
}