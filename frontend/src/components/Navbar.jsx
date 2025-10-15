import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/">
        Dashboard
      </Link>
      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/upload">
        Upload Data
      </Link>
      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/verify">
        Verify Ownership
      </Link>
    </nav>
  )
}
