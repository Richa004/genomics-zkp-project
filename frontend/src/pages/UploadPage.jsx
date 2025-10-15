import React, { useState } from "react"
import axios from "../services/api"
import { toast } from "react-toastify"

export default function UploadPage() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first!")
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    setLoading(true)
    try {
      await axios.post("/api/upload", formData)
      toast.success("File uploaded successfully!")
    } catch (err) {
      console.error(err)
      toast.error("Upload failed!")
    }
    setLoading(false)
  }

  return (
    <div className="container">
      <h2>Upload Genomic Data</h2>
      <input type="file" accept=".vcf,.sam" onChange={(e) => setFile(e.target.files[0])} />
      <br />
      <br />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  )
}
