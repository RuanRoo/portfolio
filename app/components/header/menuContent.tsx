'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from "react"

interface MenuItem {
  label: string
  href: string
}

const menuItems: MenuItem[] = [
  { label: "About me", href: "/about" },
  { label: "Selected work", href: "/work" },
  { label: "Roadmap", href: "/roadmap" },
]

export function MenuContent() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
<div className="flex flex-col flex-grow">
  <nav className="flex flex-col">
    {menuItems.map((item) => (
      <a
        key={item.label}
        href={item.href}
        className="group relative flex items-center justify-between rounded-lg px-4 py-2 text-lg transition-colors hover:bg-zinc-800"
        onMouseEnter={() => setHoveredItem(item.label)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span>{item.label}</span>
        <ArrowRight
          className={`h-5 w-5 transition-opacity ${
            hoveredItem === item.label ? "opacity-100" : "opacity-0"
          }`}
        />
      </a>
    ))}
  </nav>
  <div className='mt-auto border-t border-grey-500'>
    <h3 className="mt-2 text-sm font-semibold text-grey-500 mb-2">Let's connect</h3>
    <a
      href="/contact"
      className="relative flex items-center justify-between rounded-lg px-4 py-3 text-lg transition-colors hover:bg-zinc-800"
      onMouseEnter={() => setHoveredItem("Say hi")}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <span>Say hi</span>
      <ArrowRight
        className={`h-5 w-5 transition-opacity ${
          hoveredItem === "Say hi" ? "opacity-100" : "opacity-0"
        }`}
      />
    </a>
  </div>
</div>

  )
}

