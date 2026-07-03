import { useState } from "react";

export default function TypeTester() {
  const [text, setText] = useState(
    "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
  );
  const [fontSize, setFontSize] = useState(64);
  const [lineHeight, setLineHeight] = useState(1.1);
  const [letterSpacing, setLetterSpacing] = useState(0);

  return (
    <section
      id="tester"
      className="bg-(--bg-color)/65 border-b border-(--border-color) py-16 md:py-24"
    >
      <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_520px] divide-y lg:divide-y-0 lg:divide-x divide-(--border-color)"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="flex items-end gap-2 select-none">
            <span className="font-boxy pt-1 text-5xl md:text-6xl text-(--text-white)">
              TYPE
            </span>

            <span className="py-2.5 font-archivo text-xs md:text-sm font-black tracking-[0.35em] uppercase text-(--accent-cyan)">
              TESTER
            </span>
          </div>

          <p className="mt-3 font-archivo text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-(--text-white)/60">
            Experiment with size, spacing and rhythm
          </p>
        </div>
        <div className="bg-(--bg-muted) border border-(--border-color)">
          <div className="flex flex-col lg:flex-row border-b border-(--border-color) divide-y lg:divide-y-0 lg:divide-x divide-(--border-color)">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-(--border-color)">
              <div className="p-4 flex flex-col justify-center gap-3 bg-black/5 hover:bg-black/10 transition-colors">
                <div className="flex justify-between items-center font-archivo text-xs font-bold uppercase text-(--text-white)">
                  <span>Size</span>
                  <span className="tabular-nums text-(--accent-pink)">
                    {fontSize}px
                  </span>
                </div>

                <input
                  type="range"
                  min="16"
                  max="150"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full h-2 appearance-none bg-(--border-color)/20 border border-(--border-color)
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:bg-(--accent-pink)
                  [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-(--border-color)
                  [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>

              <div className="p-4 flex flex-col justify-center gap-3 bg-black/5 hover:bg-black/10 transition-colors">
                <div className="flex justify-between items-center font-archivo text-xs font-bold uppercase text-(--text-white)">
                  <span>Leading</span>
                  <span className="tabular-nums text-(--accent-yellow)">
                    {lineHeight}
                  </span>
                </div>

                <input
                  type="range"
                  min="0.5"
                  max="2.5"
                  step="0.1"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number(e.target.value))}
                  className="w-full h-2 appearance-none bg-(--border-color)/20 border border-(--border-color)
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:bg-(--accent-yellow)
                  [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-(--border-color)
                  [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>

              <div className="p-4 flex flex-col justify-center gap-3 bg-black/5 hover:bg-black/10 transition-colors">
                <div className="flex justify-between items-center font-archivo text-xs font-bold uppercase text-(--text-white)">
                  <span>Tracking</span>
                  <span className="tabular-nums text-(--accent-cyan)">
                    {letterSpacing}px
                  </span>
                </div>

                <input
                  type="range"
                  min="-10"
                  max="40"
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(Number(e.target.value))}
                  className="w-full h-2 appearance-none bg-(--border-color)/20 border border-(--border-color)
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:bg-(--accent-cyan)
                  [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-(--border-color)
                  [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full bg-(--bg-color) p-6 md:p-12 overflow-hidden group">
            {text.length === 0 && (
              <div
                className="absolute top-12 left-12 font-boxy text-(--text-white)/20 pointer-events-none"
                style={{ fontSize: `${fontSize}px` }}
              >
                Start typing...
              </div>
            )}

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              spellCheck="false"
              className="w-full min-h-100 bg-transparent font-boxy text-(--text-white)
              resize-y focus:outline-none placeholder-transparent
              selection:bg-(--accent-pink) selection:text-black"
              style={{
                fontSize: `${fontSize}px`,
                lineHeight,
                letterSpacing: `${letterSpacing}px`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}