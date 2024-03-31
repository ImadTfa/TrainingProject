import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import ForgotPassword from "./pages/Login/ForgotPassword";

import EmployeeAcceuil from "./pages/Employee/EmployeeAcceuil/EmployeeAcceuil";
import EmployeePointage from "./pages/Employee/EmplyeePointage/EmployeePointage";
import EmployeeConge from "./pages/Employee/EmployeeConge/EmployeeConge";
import EmployeeAccount from "./pages/Employee/EmployeeAccount/EmployeeAccount";

import SuperviseurAcceuil from "./pages/Superviseur/SuperviseurAcceuil/SuperviseurAcceuil";
import SuperviseurDemandesConge from "./pages/Superviseur/SuperviseurDemandesConge/SuperviseurDemandesConge";
import SuperviseurPointage from "./pages/Superviseur/SuperviseurPointage/SuperviseurPointage";
import SuperviseurAccount from "./pages/Superviseur/SuperviseurAccount/SuperviseurAccount";

import AdminEmployee from "./pages/Admin/AdminEmployee/AdminEmployee";
import AdminSuperviseur from "./pages/Admin/AdminSuperviseur/AdminSuperviseur";

import AdminModifierEmployee from "./pages/Admin/AdminEmployee/AdminModifierEmployee";
import AdminModifierSuperviseur from "./pages/Admin/AdminSuperviseur/AdminModifierSuperviseur";
import AdminAjouter from "./pages/Admin/AdminAjouter/AdminAjouter";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      <Route path="/employeeacceuil" element={<EmployeeAcceuil />} />
      <Route path="/employeepointage" element={<EmployeePointage />} />
      <Route path="/employeeconge" element={<EmployeeConge />} />
      <Route path="/employeeaccount" element={<EmployeeAccount />} />

      <Route path="/superviseuracceuil" element={<SuperviseurAcceuil />} />
      <Route path="/superviseurdemandesconge" element={<SuperviseurDemandesConge />} />
      <Route path="/superviseurpointage" element={<SuperviseurPointage />} />
      <Route path="/superviseuraccount" element={<SuperviseurAccount />} />

      <Route path="/adminemployee" element={<AdminEmployee />} />
      <Route path="/adminsuperviseur" element={<AdminSuperviseur />} />
      <Route path="/adminajouter" element={<AdminAjouter />} />

      <Route path="/adminmodifieremployee" element={<ModifierEAdminModifierEmployeemployee />} />
      <Route path="/adminmodifiersuperviseur" element={<AdminModifierSuperviseur />} />

    </Routes>
  );
}
export default App;






