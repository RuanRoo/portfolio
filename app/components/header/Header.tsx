"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Menu from "./Menu";
import { MenuContent } from "./menuContent";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex h-20 items-center justify-between px-10">
        <Link href="/"><div className="font-black">RUAN RADYN</div></Link>
        <div className="flex items-center gap-4 text-base font-semibold">
          <div className="flex h-10 items-center rounded-[91px] border border-brandblack px-5">GET IN TOUCH</div>
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
            "fixed right-0 top-16 z-50 h-[75vh] w-full rounded-2xl bg-zinc-900 p-8 text-grey-500 transition-transform flex flex-col md:w-[400px]",
            isMenuOpen ? "right-10" : "right-[-420px]"
          )}
        >
          <div className="mb-8 flex justify-end">
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
          <MenuContent />
        </div>
      </div>
    </>
  );
}
