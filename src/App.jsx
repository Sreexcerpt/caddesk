import React from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import SideNavaBar from './Component/SideNavaBar/SideNavaBar'
import Footer from './Component/Footer/Footer'
import DashBoard from './Pages/DashBoard/DashBoard'
import LeadTracking from './Pages/LeadTracking/LeadTracking';
import AdmissionQuery from './Pages/Admin/Admission Query/Admissionquery'
import LeadScoring from './Pages/LeadScoring/LeadScoring';
import StudentProfileManagement from './Pages/StudentLifecycleManagement/StudentProfileManagement/StudentProfileManagement';
import CourseBatchEnrollment from './Pages/StudentLifecycleManagement/CourseBatchEnrollment/CourseBatchEnrollment';
import Login from './Pages/login/login';
const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && <SideNavaBar />}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path='/admissionquery' element={<AdmissionQuery />} />
        <Route path="/LeadTracking" element={<LeadTracking />} />
        <Route path="/LeadScoring" element={<LeadScoring />} />
        <Route path="/StudentProfileManagement" element={<StudentProfileManagement />} />
        <Route path="/CourseBatchEnrollment" element={<CourseBatchEnrollment />} />
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
