import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Tester", href: "#tester" },
    { label: "Glyphs", href: "#charmap" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-(--border-color) bg-(--bg-color)">
      <div className="flex items-stretch justify-between">
        <div className="flex flex-1 items-center justify-between px-4 py-3 md:px-6">
          <a
            href="#"
            className="flex items-end gap-2 select-none"
          >
            <span className="font-boxy pt-1 text-5xl md:text-5xl text-(--text-white)">
              BOXY
            </span>

            <span className="py-2.5 font-archivo text-xs md:text-sm font-black tracking-[0.35em] uppercase text-(--accent-yellow)">
              FOUNDRY
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent pb-1 font-archivo text-sm font-bold tracking-widest uppercase text-(--text-white)/80 transition-all hover:border-(--accent-pink) hover:text-(--accent-pink)"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden flex h-11 w-11 items-center justify-center border border-(--border-color) text-(--text-white)"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* desktop download */}
        <div className="hidden sm:flex border-l border-(--border-color)">
          <a
            href="#download"
            className="flex items-center bg-(--accent-yellow) px-6 md:px-10 font-archivo text-sm md:text-base font-black tracking-widest uppercase text-black transition-colors hover:bg-(--accent-pink)"
          >
            Download
          </a>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-(--border-color)">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-(--border-color) px-6 py-4 font-archivo font-bold tracking-widest uppercase text-(--text-white) transition-colors hover:bg-(--accent-cyan) hover:text-black"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="block bg-(--accent-yellow) px-6 py-4 font-archivo font-black tracking-widest uppercase text-black transition-colors hover:bg-(--accent-pink)"
          >
            Download
          </a>
        </div>
      )}
    </nav>
  );
}