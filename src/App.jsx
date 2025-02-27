import React from 'react'

// Routes//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component imports//
import SideNavaBar from './Component/SideNavaBar/SideNavaBar'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'


// Pages import here//
import DashBoard from './Pages/DashBoard/DashBoard'
import LeadTracking from './Pages/LeadTracking/LeadTracking';
import AdmissionQuery from './Pages/Admin/Admission Query/Admissionquery'
import LeadScoring from './Pages/LeadScoring/LeadScoring';
import StudentProfileManagement from './Pages/StudentLifecycleManagement/StudentProfileManagement/StudentProfileManagement';
import CourseBatchEnrollment from './Pages/StudentLifecycleManagement/CourseBatchEnrollment/CourseBatchEnrollment';

const App = () => {
  return (
    <div>
      <Router>
      <SideNavaBar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path='/admissionquery' element={<AdmissionQuery/>}/>
          <Route path="/LeadTracking" element={<LeadTracking/>}/>
          <Route path="/LeadScoring" element={<LeadScoring/>}/>
          <Route path="/StudentProfileManagement" element={<StudentProfileManagement/>}/>
          <Route path="/CourseBatchEnrollment" element={<CourseBatchEnrollment/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
