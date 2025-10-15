import React, { useState } from "react"
import axios from "../services/api"
import { toast } from "react-toastify"

export default function VerifyPage() {
  const [ownerId, setOwnerId] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleVerify = async () => {
    if (!ownerId) {
      toast.error("Enter Owner ID to verify!")
      return
    }

    setLoading(true)
    try {
      const res = await axios.post("/api/verify", { ownerId })
      setResult(res.data)
      toast.success("Verification complete!")
    } catch (err) {
      console.error(err)
      toast.error("Verification failed!")
    }
    setLoading(false)
  }

  return (
    <div className="container">
      <h2>Verify Genomic Ownership (ZKP)</h2>
      <input
        type="text"
        placeholder="Enter Owner ID"
        value={ownerId}
        onChange={(e) => setOwnerId(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleVerify} disabled={loading}>
        {loading ? "Verifying..." : "Verify Ownership"}
      </button>

      {result && (
        <div style={{ marginTop: "1.5rem" }}>
          <h4>Verification Result:</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
