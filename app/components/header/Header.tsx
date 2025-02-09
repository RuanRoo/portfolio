"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Menu from "./Menu";
import { MenuContent } from "./menuContent";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()

  const handleScrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault()

    if (pathname === "/") {
      // Scroll only if already on the home page
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })
    } else {
      // Redirect to "/" and then scroll
      window.location.href = "/#footer"
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="flex h-20 items-center justify-between px-4 md:px-10">
        <Link href="/">
          <div className="font-black">RUAN RADYN</div>
        </Link>
        <div className="flex items-center gap-4 text-base font-semibold">
          <div className="hidden md:flex h-10 items-center rounded-[91px] border border-brandblack px-5 cursor-pointer hover:bg-brandblue hover:text-grey-100 transition-all duration-500 ease-in-out" onClick={handleScrollToFooter}>GET IN TOUCH</div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <div className="h-auto">
        <div
          className={cn(
            "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity",
            isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-full bg-zinc-900 px-4 py-2 md:p-8 text-grey-400 transition-transform md:top-16 md:h-[75vh] md:w-[400px] md:rounded-2xl",
            isMenuOpen ? "translate-x-0 md:right-10" : "translate-x-full md:right-[-420px]"
          )}
        >
          <div className="mb-2 flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-zinc-800">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="h-full">
            <MenuContent scrollToFooter={handleScrollToFooter} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
