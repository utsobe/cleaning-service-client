import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Services from "./pages/Services";
import PrivateRoute from "./authentication/PrivateRoute";
import About from "./pages/About";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Navbar>
      <Routes>
        {
          publicRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
        }
        <Route element={<PrivateRoute />}>
          {
            PrivateRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
          }
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='add-admin' element={<AddAdmin />} />
            <Route path='add-service' element={<AddService />} />
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
