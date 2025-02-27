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
import Register from './Pages/Register/Register'
import AddFaculty from './Pages/FacultyManagemnet/AddFaculty'
import FacultyList from './Pages/FacultyManagemnet/FacultyList'
import LeaveRequestForm from './Pages/FacultyManagemnet/LeaveRequestpage'
import LeaveRequests from './Pages/FacultyManagemnet/LeaveManagment'
import WorkloadDistribution from './Pages/FacultyManagemnet/Workloaddistribution'
import AttendanceTracker from './Pages/FacultyManagemnet/AttendanceTracker'
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
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path='/Login' element={<Register/>}/>
        <Route path='/AddFaculty' element={<AddFaculty/>}/>
         <Route path='/FacultyList' element={<FacultyList/>}/>
         <Route path='/LeaveRequestForm' element={<LeaveRequestForm/>}/>
         <Route path='/LeaveRequests' element={<LeaveRequests/>}/>
         <Route path='/WorkloadDistribution' element={<WorkloadDistribution/>}/>
         <Route path='/AttendanceTracker' element={<AttendanceTracker/>}/>
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
