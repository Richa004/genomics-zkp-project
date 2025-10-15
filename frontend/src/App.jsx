import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import UploadPage from "./pages/UploadPage"
import VerifyPage from "./pages/VerifyPage"
import Dashboard from "./pages/Dashboard"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/verify" element={<VerifyPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  )
}
