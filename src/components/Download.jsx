export default function Download() {
  return (
    <section
      id="download"
      className="relative w-full bg-(--bg-color)/65 border-y border-(--border-color) py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(var(--border-color)_2px,transparent_2px)] bg-size-[20px_20px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="mb-10">
          <div className="flex items-end gap-2 select-none">
            <span className="font-boxy pt-1 text-5xl md:text-6xl text-(--text-white)">
              DOWNLOAD
            </span>

            <span className="py-2.5 font-archivo text-xs md:text-sm font-black tracking-[0.35em] uppercase text-(--accent-green)">
              FONT
            </span>
          </div>

          <p className="mt-3 font-archivo text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-(--text-white)/70">
            Free for personal and commercial use
          </p>
        </div>

        <div className="flex flex-col border-2 border-(--border-color) bg-(--bg-color)">
          <div className="hidden md:grid md:grid-cols-4 divide-x border-b border-(--border-color) divide-(--border-color)">
            <div className="flex items-center justify-center bg-(--accent-green) p-3 md:p-4">
              <span className="font-archivo text-xs md:text-sm font-black uppercase text-black">
                Release: 1.0
              </span>
            </div>

            <div className="flex items-center justify-center bg-(--accent-green) p-3 md:p-4">
              <span className="font-archivo text-xs md:text-sm font-black uppercase text-black">
                Format: .OTF
              </span>
            </div>

            <div className="hidden md:flex items-center justify-center bg-(--accent-green) p-4">
              <span className="font-archivo text-sm font-black uppercase text-black">
                Size: 42KB
              </span>
            </div>

            <div className="flex items-center justify-center bg-(--accent-green) p-3 md:p-4">
              <span className="font-archivo text-xs md:text-sm font-black uppercase text-black">
                Status: Free
              </span>
            </div>
          </div>

          {/* body */}
          <div className="flex flex-col items-center p-8 text-center md:p-16">
            <h2 className="mb-2 font-boxy text-5xl md:text-7xl font-black tracking-wide select-none">
              <span className="text-(--accent-cyan)">B</span>
              <span className="text-(--accent-yellow)">O</span>
              <span className="text-(--accent-pink)">X</span>
              <span className="text-(--accent-cyan)">Y</span>
              <span>&nbsp;</span>
              <span className="text-(--accent-yellow)">R</span>
              <span className="text-(--accent-pink)">E</span>
              <span className="text-(--accent-cyan)">G</span>
              <span className="text-(--accent-yellow)">U</span>
              <span className="text-(--accent-pink)">L</span>
              <span className="text-(--accent-cyan)">A</span>
              <span className="text-(--accent-yellow)">R</span>
            </h2>

            <p className="mb-10 md:mb-14 font-archivo font-bold uppercase tracking-widest text-(--text-white)/60">
              Ready for extraction
            </p>

            <a
              href="/font/Boxy-Regular.otf"
              download="Boxy-Regular.otf"
              className="group inline-flex w-full items-center justify-center border-2 border-(--border-color) bg-(--accent-green) px-8 py-6 font-archivo text-2xl font-black uppercase text-black transition-all duration-100 hover:bg-(--accent-cyan) hover:-translate-y-1 md:w-auto md:px-12 md:py-8 md:text-4xl"
            >
              <span className="flex items-center gap-4">
                Download Font

                <svg
                  className="h-8 w-8 transition-transform group-hover:translate-y-1 md:h-10 md:w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* license */}
          <div className="flex flex-col divide-y border-t border-(--border-color) bg-black/5 md:flex-row md:divide-x md:divide-y-0 divide-(--border-color)">
            <div className="flex items-center p-6 md:w-1/3 md:p-8">
              <h4 className="font-archivo text-xl font-black uppercase text-(--text-white)">
                End User License
              </h4>
            </div>

            <div className="flex items-center p-6 md:w-2/3 md:p-8">
              <p className="font-archivo text-sm font-bold uppercase leading-relaxed tracking-wide text-(--text-white)/80">
                100% free for personal and commercial use. No attribution
                required. Do not resell the raw font files. Built for the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}