import React from 'react'
import SideNavaBar from './Component/SideNavaBar/SideNavaBar'
import Header from './Component/Header/Header'
import DashBoard from './Pages/DashBoard/DashBoard'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <SideNavaBar/>
      <Header/>
      <DashBoard/>
      <Footer/>
    </div>
  )
}

export default App
