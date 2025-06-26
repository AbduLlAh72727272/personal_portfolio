"use client"

import React from "react"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="flex flex-col items-center md:items-start justify-start min-h-screen gap-8 min-w-[220px] max-w-xs w-full mt-8 md:mt-24">
      {/* Sidebar is now empty; navigation will be rendered in page.tsx */}
    </aside>
  )
}
