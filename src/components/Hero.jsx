export default function Hero() {

  return (
    <section className="relative w-full overflow-hidden border-b border-(--border-color) bg-(--bg-color)">
      <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_520px] divide-y lg:divide-y-0 lg:divide-x divide-(--border-color)">
        {/* left column (desktop only) */}
        <div className="hero-grid relative hidden lg:flex flex-col items-center justify-center overflow-hidden p-32 group">
          <h1 className="hero-title relative z-10 select-none font-boxy text-[clamp(6rem,22vw,20rem)] leading-[0.8] text-(--bg-color)">
            Boxy
          </h1>

          <h1 className="hero-title-shadow pointer-events-none absolute -translate-x-12 translate-y-12 select-none font-boxy text-[clamp(6rem,22vw,20rem)] leading-[0.8] text-transparent opacity-10">
            Boxy
          </h1>
        </div>

        {/* right column */}
        <div className="flex flex-col bg-(--bg-color)">
          <div className="flex flex-1 flex-col justify-center border-b border-(--border-color) bg-black/30 p-10 backdrop-blur-sm md:p-14">
            <h2 className="mb-6 font-archivo text-4xl font-black leading-none tracking-tight uppercase text-(--text-white) md:text-5xl">
              A New <br />
              <span className="text-(--accent-yellow)">Grotesk</span> <br />
              Typeface
            </h2>

            <p className="font-archivo text-sm font-bold leading-relaxed tracking-widest uppercase text-(--text-white)/80 md:text-base">
              A raw, geometric typeface built for headlines that don't ask
              permission. Free for personal and commercial use.
            </p>
          </div>

          <a
            href="#tester"
            className="group flex items-center justify-between border-b border-(--border-color) bg-(--accent-cyan) p-8 transition-colors hover:bg-(--accent-pink) md:p-10"
          >
            <span className="font-archivo text-2xl font-black uppercase text-black md:text-3xl">
              Try it Live
            </span>

            <svg
              className="h-10 w-10 text-black transition-transform group-hover:translate-x-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </a>

          <a
            href="#download"
            className="group flex items-center justify-between bg-(--accent-yellow) p-8 transition-colors hover:bg-(--accent-pink) md:p-10"
          >
            <span className="font-archivo text-2xl font-black uppercase text-black md:text-3xl">
              Get the Font
            </span>

            <svg
              className="h-10 w-10 text-black transition-transform group-hover:translate-y-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* marquee */}
      <div className="flex overflow-hidden border-t border-(--border-color) bg-black py-5 font-archivo text-xl font-black whitespace-nowrap uppercase text-(--text-white) md:text-2xl">
        <div className="flex min-w-full animate-marquee">
          <span className="px-6 tracking-widest">
            NEW TYPEFACE <span className="text-(--accent-yellow)">•</span>
            BOXY REGULAR <span className="text-(--accent-pink)">•</span>
            AVAILABLE NOW <span className="text-(--accent-cyan)">•</span>
            FREE TO USE <span className="text-(--accent-yellow)">•</span>
            NEW TYPEFACE <span className="text-(--accent-yellow)">•</span>
            BOXY REGULAR <span className="text-(--accent-pink)">•</span>
            AVAILABLE NOW <span className="text-(--accent-cyan)">•</span>
            FREE TO USE <span className="text-(--accent-yellow)">•</span>
          </span>

          <span className="px-6 tracking-widest">
            NEW TYPEFACE <span className="text-(--accent-yellow)">•</span>
            BOXY REGULAR <span className="text-(--accent-pink)">•</span>
            AVAILABLE NOW <span className="text-(--accent-cyan)">•</span>
            FREE TO USE <span className="text-(--accent-yellow)">•</span>
            NEW TYPEFACE <span className="text-(--accent-yellow)">•</span>
            BOXY REGULAR <span className="text-(--accent-pink)">•</span>
            AVAILABLE NOW <span className="text-(--accent-cyan)">•</span>
            FREE TO USE <span className="text-(--accent-yellow)">•</span>
          </span>
        </div>
      </div>
    </section>
  );
}