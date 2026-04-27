export function Header() {
    return (
        <header className="pt-12 pb-8 text-center relative">
            {/* Yellow highlight block behind title */}
            <div className="inline-block relative">
                <div
                    className="absolute inset-0 -mx-8 -my-4 rounded z-[-1]"
                    style={{
                        background: "var(--yellow)",
                        transform: "rotate(-1.5deg)",
                        boxShadow: "4px 4px 0 var(--ink)",
                    }}
                />
                <h1
                    className="font-tag text-5xl sm:text-6xl tracking-wide leading-tight"
                    style={{
                        color: "var(--ink)",
                        textShadow: "2px 2px 0 var(--orange), 4px 4px 0 var(--pink), 7px 7px 0 rgba(0,0,0,0.25)",
                        transform: "rotate(-1deg)",
                    }}
                >
                    RUSTDESK SERVERS
                </h1>
            </div>

            <p
                className="font-hand text-2xl mt-5 flex items-center justify-center gap-2"
                style={{ color: "var(--ink-soft)", transform: "rotate(0.8deg)" }}
            >
                our relay nodes, all in one spot
                <svg
                    className="animate-arrow-drip"
                    style={{ color: "var(--pink)" }}
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="12" y1="4" x2="12" y2="18" />
                    <polyline points="6 12 12 18 18 12" />
                </svg>
            </p>
        </header>
    );
}
