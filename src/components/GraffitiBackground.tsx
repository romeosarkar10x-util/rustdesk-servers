/** Drip elements that hang from the top of the viewport */
export function GraffitiDrips() {
    return (
        <>
            {/* Pink drip */}
            <div
                className="fixed top-0 z-0 pointer-events-none rounded-b-full opacity-35"
                style={{ left: "8%", width: 6, height: 180, background: "var(--pink)" }}
            />
            {/* Cyan drip */}
            <div
                className="fixed top-0 z-0 pointer-events-none rounded-b-full opacity-35"
                style={{ left: "25%", width: 6, height: 120, background: "var(--cyan)" }}
            />
            {/* Yellow drip */}
            <div
                className="fixed top-0 z-0 pointer-events-none rounded-b-full opacity-35"
                style={{ right: "15%", width: 5, height: 200, background: "var(--yellow)" }}
            />
            {/* Lime drip */}
            <div
                className="fixed top-0 z-0 pointer-events-none rounded-b-full opacity-35"
                style={{ right: "35%", width: 6, height: 90, background: "var(--lime)" }}
            />
            {/* Purple drip */}
            <div
                className="fixed top-0 z-0 pointer-events-none rounded-b-full opacity-35"
                style={{ left: "55%", width: 4, height: 150, background: "var(--purple)" }}
            />
        </>
    );
}

/** Blurred radial paint-splash glows */
export function GraffitiSplatters() {
    return (
        <>
            <div
                className="fixed z-0 pointer-events-none opacity-12"
                style={{
                    top: 60,
                    left: -40,
                    width: 300,
                    height: 300,
                    background: "radial-gradient(ellipse at 40% 50%, var(--pink) 0%, transparent 70%)",
                    filter: "blur(30px)",
                    transform: "rotate(-15deg)",
                }}
            />
            <div
                className="fixed z-0 pointer-events-none opacity-12"
                style={{
                    bottom: 100,
                    right: -60,
                    width: 350,
                    height: 350,
                    background: "radial-gradient(ellipse at 60% 50%, var(--cyan) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    transform: "rotate(10deg)",
                }}
            />
            <div
                className="fixed z-0 pointer-events-none opacity-12"
                style={{
                    top: "40%",
                    left: "30%",
                    width: 250,
                    height: 250,
                    background: "radial-gradient(ellipse at 50% 50%, var(--yellow) 0%, transparent 70%)",
                    filter: "blur(50px)",
                }}
            />
        </>
    );
}

/** Fixed sticker labels in the corners */
export function GraffitiStickers() {
    return (
        <>
            <div
                className="fixed z-0 pointer-events-none font-tag text-xs px-3 py-2 border-3 border-[var(--ink)] rounded opacity-50 shadow-[3px_3px_0_rgba(0,0,0,0.2)]"
                style={{ top: "15%", right: "4%", background: "var(--cyan)", transform: "rotate(12deg)" }}
            >
                P2P
            </div>
            <div
                className="fixed z-0 pointer-events-none font-tag text-xs px-3 py-2 border-3 border-[var(--ink)] rounded opacity-50 shadow-[3px_3px_0_rgba(0,0,0,0.2)] hidden sm:block"
                style={{ bottom: "25%", left: "3%", background: "var(--yellow)", transform: "rotate(-8deg)" }}
            >
                SELF HOSTED
            </div>
            <div
                className="fixed z-0 pointer-events-none font-tag text-xs px-3 py-2 border-3 border-[var(--ink)] rounded opacity-50 shadow-[3px_3px_0_rgba(0,0,0,0.2)] hidden sm:block"
                style={{ top: "55%", right: "3%", background: "var(--pink)", color: "white", transform: "rotate(5deg)" }}
            >
                ENCRYPTED
            </div>
        </>
    );
}
