export default function Navbar() {
    const navLinks = [
        { label: 'Tester', href: '#tester' },
        { label: 'Glyphs', href: '#charmap' },
    ]

    return (
        <nav className="sticky top-0 z-50 flex items-stretch justify-between bg-[#0d1117] border-b border-(--border-color)">
            <div className="flex flex-1 items-center justify-between p-3">

                <a href="#top" className="font-boxy text-6xl pt-1.5 pl-2 text-(--text)
                                 tracking-wide select-none">
                    BOXY FOUNDRY
                </a>

                <div className="flex items-center gap-2 md:gap-4">
                    {navLinks.map((link) => (
                        <a key={link.href}
                            href={link.href}
                            className="hidden font-archivo sm:inline-block text-white text-md px-3 py-2 border border-transparent
                       hover:border-(--border-color)
                       transition-all duration-150"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex items-center bg-(--accent-yellow)">
                <a href="#download"
                    className="text-black font-archivo text-md px-6 h-full flex items-center"
                >
                    Download
                </a>
            </div>
        </nav>
    )
}