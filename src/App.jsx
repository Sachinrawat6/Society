import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import MemberShip from './pages/MemberShip'
import FixedDeposit from './pages/FixedDeposit'
import RecurringDeposit from './pages/RecurringDeposit'
import MonthlyIncomeScheme from './pages/MonthlyIncomeScheme'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/membership' element={<MemberShip />} />
        <Route path='/schemes/fixed-deposit' element={<FixedDeposit />} />
        <Route path='/schemes/recurring-deposit' element={<RecurringDeposit />} />
        <Route path='/schemes/monthly-income' element={<MonthlyIncomeScheme />} />


      </Routes>
      <Footer />
    </BrowserRouter>


  )
}

export default App