import React, { useEffect, useState } from "react"
import axios from "../services/api"

export default function Dashboard() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    axios.get("/api/logs").then((res) => {
      setLogs(res.data.logs || [])
    })
  }, [])

  return (
    <div className="container">
      <h2>Access & Transaction Logs</h2>
      {logs.length === 0 ? (
        <p>No logs found.</p>
      ) : (
        <ul>
          {logs.map((log, idx) => (
            <li key={idx}>{log}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
