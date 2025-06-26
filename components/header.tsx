"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

export function Header() {
  const [currentTime, setCurrentTime] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          timeZone: "Asia/Karachi",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: User, label: "About" },
    { href: "/work", icon: Briefcase, label: "Work" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-xl border-none rounded-b-3xl transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-sm text-muted-foreground">Asia/Islamabad</div>

        <nav className="flex items-center gap-0 px-2 py-1 rounded-full border border-neutral-700 bg-neutral-900/70 shadow-inner">
          {navItems.map((item, idx) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <React.Fragment key={item.href}>
                <Link href={item.href} className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-200 text-base outline-none focus:ring-2 focus:ring-blue-500 ${isActive
                  ? "bg-neutral-700 text-white"
                  : "text-neutral-300 hover:bg-neutral-800"}`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
                {idx < navItems.length - 1 && (
                  <span className="h-6 w-px bg-neutral-700 mx-1" />
                )}
              </React.Fragment>
            )
          })}
        </nav>

        <div className="text-sm text-muted-foreground font-mono">{currentTime}</div>
      </div>
    </header>
  )
}
