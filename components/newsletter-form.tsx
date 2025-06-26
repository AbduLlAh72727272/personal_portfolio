"use client"

import { useState } from "react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setSuccess(true)
        setEmail("")
      } else {
        setError(data.error || "Something went wrong.")
      }
    } catch {
      setError("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md z-10">
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-1 rounded-full px-6 py-3 bg-neutral-900/70 border border-neutral-700 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-white text-black font-semibold rounded-full px-6 py-3 hover:bg-neutral-200 transition shadow"
        disabled={loading}
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
      {success && <span className="text-green-400 text-sm mt-2 md:mt-0">Subscribed! Check your email.</span>}
      {error && <span className="text-red-400 text-sm mt-2 md:mt-0">{error}</span>}
    </form>
  )
} 