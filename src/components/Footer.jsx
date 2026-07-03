export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-(--border-color) bg-black">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Footer */}
        <div className="mt-12 flex flex-col border-2 border-white/20 lg:mt-20 lg:flex-row">
          {/* Branding */}
          <div className="flex flex-col justify-between border-b-2 border-white/20 bg-black/50 p-8 backdrop-blur-sm lg:w-2/3 lg:border-b-0 lg:border-r-2 md:p-12">
            <div className="mb-8 inline-block bg-(--accent-cyan) px-3 py-2 font-archivo text-xs font-black uppercase tracking-[0.3em] text-black md:mb-16">
              END OF SPECIMEN
            </div>

            <div className="select-none">
              <span className="font-boxy text-6xl leading-none text-(--accent-yellow) md:text-8xl lg:text-9xl [text-shadow:3px_3px_0_var(--accent-pink)]">
                BOXY
              </span>

              <div className="-translate-y-3 font-archivo text-base font-black uppercase tracking-[0.45em] text-white/70 md:text-lg">
                FOUNDRY
              </div>
            </div>
          </div>

          {/* links */}
          <div className="flex flex-col divide-y-2 divide-white/20 bg-black/80 lg:w-1/3">
            <a
              href="https://github.com/armansinghh/typeface-font"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 flex-col justify-center p-8 transition-colors duration-150 hover:bg-(--accent-cyan) hover:text-black md:p-10"
            >
              <span className="mb-2 font-archivo text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-black/60">
                Source Code
              </span>

              <div className="flex items-center justify-between">
                <span className="font-archivo text-3xl font-black uppercase tracking-tight text-white group-hover:text-black">
                  GitHub
                </span>

                <svg
                  className="h-8 w-8 translate-x-0 translate-y-0 text-white transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="3"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </a>

            <a
              href="https://buymeacoffee.com/armansingh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 flex-col justify-center p-8 transition-colors duration-150 hover:bg-(--accent-pink) hover:text-black md:p-10"
            >
              <span className="mb-2 font-archivo text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-black/60">
                Support the Dev
              </span>

              <div className="flex items-center justify-between">
                <span className="font-archivo text-3xl font-black uppercase tracking-tight text-white group-hover:text-black">
                  Donate
                </span>

                <svg
                  className="h-8 w-8 translate-x-0 translate-y-0 text-white transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="3"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="my-8 flex flex-col items-center justify-between gap-4 border border-white/20 bg-white/5 p-4 md:mb-12 md:flex-row">
          <p className="text-center font-archivo text-xs font-bold uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} Arman Singh. All rights reserved.
          </p>

          <div
            className="hidden gap-0.5 opacity-40 mix-blend-screen md:flex"
            aria-hidden="true"
          >
            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className={`bg-white
                  ${i % 4 === 0 ? "w-2" : ""}
                  ${i % 3 === 0 && i % 4 !== 0 ? "w-0.75" : ""}
                  ${i % 3 !== 0 && i % 4 !== 0 ? "w-1" : ""}
                  h-5`}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}