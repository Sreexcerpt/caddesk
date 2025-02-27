import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SideNavaBar from './Component/SideNavaBar/SideNavaBar';
import Footer from './Component/Footer/Footer';
import DashBoard from './Pages/DashBoard/DashBoard';
import Login from './Pages/login/login';
import AdmissionQuery from './Pages/Admin/Admission Query/Admissionquery';

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && <SideNavaBar />}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/admissionquery" element={<AdmissionQuery />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router> 
      <Layout /> {/* Now inside Router, so useLocation works */}
    </Router>
  );
};

export default App;
