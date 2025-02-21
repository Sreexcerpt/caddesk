import React from 'react'
import SideNavaBar from './Component/SideNavaBar/SideNavaBar'
import Header from './Component/Header/Header'
import DashBoard from './Pages/DashBoard/DashBoard'
import Footer from './Component/Footer/Footer'
import AdmissionQuery from './Pages/Admin/Admission Query/Admissionquery'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
      <SideNavaBar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path='/admissionquery' element={<AdmissionQuery/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
