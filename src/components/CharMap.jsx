import { useState } from "react";

export default function CharacterMap() {
  const [expanded, setExpanded] = useState(false);

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#%&*()".split(
      ""
    );

  const bgColors = [
    "bg-(--accent-cyan)",
    "bg-(--accent-yellow)",
    "bg-(--accent-pink)",
  ];

  return (
    <section
      id="charmap"
      className="bg-(--bg-color) border-b border-(--border-color) py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="flex items-end gap-2 select-none">
            <span className="font-boxy pt-1 text-5xl md:text-6xl text-(--text-white)">
              CHARACTER
            </span>

            <span className="py-2.5 font-archivo text-xs md:text-sm font-black tracking-[0.35em] uppercase text-(--accent-pink)">
              MAP
            </span>
          </div>

          <p className="mt-3 font-archivo text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-(--text-white)/60">
            Complete glyph set
          </p>
        </div>

        {/* character grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-6">
          {chars.map((char, index) => (
            <div
              key={index}
              className={`
                ${!expanded && index >= 12 ? "hidden md:flex" : "flex"}
                aspect-square
                items-center
                justify-center
                border-2
                border-(--border-color)
                font-boxy
                text-5xl
                text-black
                transition-transform
                duration-150
                hover:-translate-y-1
                ${bgColors[index % 3]}
              `}
            >
              {char}
            </div>
          ))}
        </div>

        {/* mobile view more */}
        {!expanded && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={() => setExpanded(true)}
              className="border border-(--border-color) bg-(--accent-pink) px-6 py-3
                         font-archivo text-sm font-black uppercase tracking-[0.25em]
                         text-black transition-colors hover:bg-(--accent-yellow)"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}