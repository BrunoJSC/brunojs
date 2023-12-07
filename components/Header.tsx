"use client";

import { NAV_LINKS } from "@/constants/links";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { MenuToggle } from "./MenuToggle";

export function Header() {
  return (
    <header className=" w-full h-[80px] py-[16px] px-[24px] flex items-center justify-between">
      <h1 className="md:text-3xl text-2xl font-kalam">
        Bruno <span className={`font-kalam font-bold `}>de Jesus</span>
      </h1>

      <div className="md:hidden flex gap-4">
        <MenuToggle />
        <ModeToggle />
      </div>

      <nav className="md:flex gap-4 items-center hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-lg font-bold hover:underline hover:underline-offset-4"
          >
            {link.name}
          </Link>
        ))}

        <ModeToggle />
      </nav>
    </header>
  );
}
