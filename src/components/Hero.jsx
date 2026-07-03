export default function Hero() {

  return (
    <section className="w-full bg-(--bg-color) border-b border-(--border-color) overflow-hidden">

      <div className="relative px-6 py-14 min-h-160 flex flex-col items-center justify-center">
        <div className="relative inline-flex items-center gap-2 mb-6 px-3 py-1.5
                         bg-(--accent-cyan) border border-(--border-color)
                         shadow-[3px_3px_0_0_var(--border-color)]">
          <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
          <span className="font-archivo text-xs font-bold uppercase tracking-widest text-black">
            A new grotesk typeface
          </span>
        </div>
        <h1 className="font-boxy relative text-[clamp(5rem,18vw,15rem)] leading-[0.82]
                        text-(--text-white) text-center select-none
                        [text-shadow:6px_6px_0_var(--border-color)] md:[text-shadow:10px_10px_0_var(--border-color)]">
          Boxy
        </h1>
        <p className="relative font-archivo max-w-md text-center mt-6 mb-8
                       text-sm md:text-base text-(--text-white)/70 leading-relaxed">
          A raw, geometric typeface built for headlines that don't ask permission.
          Free for personal and commercial use.
        </p>
        <div className="relative flex items-center gap-4">
          <a href="#download"
            className="bg-(--accent-yellow) text-black font-archivo font-bold uppercase text-sm
                        px-6 py-3 border border-(--border-color)
                        shadow-[4px_4px_0_0_var(--border-color)]
                        hover:translate-x-0.5 hover:translate-y-0.5
                        hover:shadow-[2px_2px_0_0_var(--border-color)]
                        transition-all duration-100">
            Get the font
          </a>
          <a href="#download"
            className="bg-(--accent-yellow) text-black font-archivo font-bold uppercase text-sm
                        px-6 py-3 border border-(--border-color)
                        shadow-[4px_4px_0_0_var(--border-color)]
                        hover:translate-x-0.5 hover:translate-y-0.5
                        hover:shadow-[2px_2px_0_0_var(--border-color)]
                        transition-all duration-100">
            Try it live
          </a>
        </div>
      </div>
      <div className="flex bg-(--accent-yellow) text-(--text-black) z-10 font-archivo uppercase py-3 border-b border-(--border-color) whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee">
          <span className="pr-4">NEW TYPEFACE • BOXY REGULAR • AVAILABLE NOW • FREE TO USE • NEW TYPEFACE • BOXY REGULAR • AVAILABLE NOW • FREE TO USE • NEW TYPEFACE • BOXY REGULAR • AVAILABLE NOW • FREE TO USE •</span>
          <span className="pr-4">NEW TYPEFACE • BOXY REGULAR • AVAILABLE NOW • FREE TO USE • NEW TYPEFACE • BOXY REGULAR • AVAILABLE NOW • FREE TO USE • NEW TYPEFACE • BOXY REGULAR • AVAILABLE NOW • FREE TO USE •</span>
        </div>
      </div>
    </section>
  )
}