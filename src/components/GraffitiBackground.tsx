import type { CSSProperties } from "react";

/* ── Floating graffiti word tags ─────────────────────────────────────── */
const FLOAT_TAGS: {
    text: string;
    color: string;
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    rotate: number;
    size: string;
    delay: number;
    dur: number;
    anim: "floatA" | "floatB" | "floatC";
}[] = [
    { text: "FRESH",   color: "var(--lime)",   left: "8%",  top: "22%",    rotate: -12, size: "1.3rem",  delay: 0,   dur: 4.2, anim: "floatA" },
    { text: "WILD",    color: "var(--pink)",   left: "78%", top: "18%",    rotate:   8, size: "1.1rem",  delay: 0.7, dur: 3.8, anim: "floatB" },
    { text: "DOPE",    color: "var(--cyan)",   left: "15%", top: "65%",    rotate:  -5, size: "1.5rem",  delay: 1.2, dur: 5.1, anim: "floatA" },
    { text: "REKT",    color: "var(--orange)", left: "72%", top: "55%",    rotate:  15, size: "0.9rem",  delay: 0.4, dur: 4.7, anim: "floatC" },
    { text: "SPRAY",   color: "var(--purple)", left: "45%", bottom: "18%", rotate:  -8, size: "1.2rem",  delay: 1.8, dur: 3.5, anim: "floatB" },
    { text: "SUDO",    color: "var(--red)",    left: "35%", top: "32%",    rotate:   6, size: "0.9rem",  delay: 2.1, dur: 4.9, anim: "floatA" },
    { text: "HACK",    color: "var(--lime)",   right: "5%", top: "42%",    rotate: -18, size: "1rem",    delay: 0.9, dur: 6.2, anim: "floatC" },
    { text: "0xDEAD",  color: "var(--ink)",    left: "2%",  top: "52%",    rotate:   4, size: "0.8rem",  delay: 1.5, dur: 5.5, anim: "floatA" },
    { text: "RELAY",   color: "var(--yellow)", left: "58%", top: "8%",     rotate:  -7, size: "1.1rem",  delay: 0.3, dur: 4.4, anim: "floatB" },
    { text: "PWN3D",   color: "var(--pink)",   left: "22%", bottom: "10%", rotate:  12, size: "0.9rem",  delay: 2.5, dur: 3.9, anim: "floatC" },
    { text: "GG",      color: "var(--cyan)",   left: "65%", top: "75%",    rotate: -20, size: "2.2rem",  delay: 1.1, dur: 5.8, anim: "floatA" },
    { text: "NOOB",    color: "var(--orange)", left: "50%", top: "50%",    rotate:   9, size: "0.75rem", delay: 3.0, dur: 4.1, anim: "floatB" },
    { text: "P2P",     color: "var(--purple)", right: "12%",top: "30%",   rotate: -14, size: "1rem",    delay: 0.6, dur: 7.0, anim: "floatC" },
    { text: "☠",      color: "var(--red)",    left: "30%", top: "78%",    rotate:   3, size: "1.6rem",  delay: 2.8, dur: 5.3, anim: "floatA" },
    { text: "✦",      color: "var(--yellow)", left: "88%", top: "65%",    rotate: -6,  size: "1.4rem",  delay: 1.4, dur: 3.2, anim: "floatC" },
    { text: "L33T",    color: "var(--lime)",   left: "12%", top: "85%",    rotate:  10, size: "1.2rem",  delay: 2.2, dur: 4.5, anim: "floatB" },
    { text: "NODE",    color: "var(--pink)",   right: "25%", top: "15%",   rotate: -25, size: "0.85rem", delay: 1.9, dur: 5.0, anim: "floatA" },
    { text: "PING",    color: "var(--cyan)",   left: "85%", bottom: "25%", rotate:   5, size: "1.4rem",  delay: 0.8, dur: 3.6, anim: "floatC" },
    { text: "FAST",    color: "var(--orange)", left: "42%", top: "12%",    rotate: -15, size: "1.1rem",  delay: 3.2, dur: 6.0, anim: "floatA" },
    { text: "SECURE",  color: "var(--purple)", right: "35%", top: "82%",   rotate:  18, size: "1.3rem",  delay: 1.7, dur: 4.8, anim: "floatB" },
    { text: "WIFI",    color: "var(--red)",    left: "5%",  top: "5%",     rotate: -10, size: "0.95rem", delay: 2.4, dur: 5.2, anim: "floatC" },
    { text: "BEEP",    color: "var(--ink)",    right: "15%", bottom: "5%", rotate:   8, size: "1.05rem", delay: 0.5, dur: 4.0, anim: "floatA" },
    { text: "SYNC",    color: "var(--yellow)", left: "55%", bottom: "35%", rotate: -22, size: "1.5rem",  delay: 2.9, dur: 6.5, anim: "floatB" },
    { text: "DATA",    color: "var(--lime)",   right: "45%", top: "25%",   rotate:  14, size: "1.25rem", delay: 1.3, dur: 3.4, anim: "floatC" },
    { text: "LINK",    color: "var(--pink)",   left: "28%", top: "45%",    rotate: -30, size: "0.8rem",  delay: 2.6, dur: 5.7, anim: "floatA" },
];

/* ── Spinning geometric shapes ───────────────────────────────────────── */
const SHAPES: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    size: number;
    color: string;
    dur: number;
    delay: number;
    ccw: boolean;
    circle?: boolean;
}[] = [
    { left: "18%",  top: "38%",    size: 38, color: "var(--pink)",   dur: 8,  delay: 0,   ccw: false },
    { left: "76%",  top: "58%",    size: 28, color: "var(--cyan)",   dur: 12, delay: 1.5, ccw: true,  circle: true },
    { left: "50%",  top: "28%",    size: 18, color: "var(--lime)",   dur: 6,  delay: 0.8, ccw: false },
    { left: "8%",   bottom: "22%", size: 48, color: "var(--yellow)", dur: 10, delay: 2.2, ccw: true  },
    { right: "8%",  bottom: "18%", size: 32, color: "var(--purple)", dur: 15, delay: 0.5, ccw: false, circle: true },
    { left: "40%",  top: "62%",    size: 22, color: "var(--orange)", dur: 9,  delay: 3.1, ccw: true  },
    { right: "20%", top: "22%",    size: 16, color: "var(--red)",    dur: 7,  delay: 1.0, ccw: false, circle: true },
    { left: "60%",  bottom: "30%", size: 42, color: "var(--cyan)",   dur: 11, delay: 2.7, ccw: true  },
    { left: "3%",   top: "12%",    size: 24, color: "var(--orange)", dur: 13, delay: 0.2, ccw: false, circle: true },
];

/* ── Paint blobs (blurred radial gradients) ──────────────────────────── */
const BLOBS: { style: CSSProperties; dur: number; delay: number }[] = [
    {
        style: { top: 60,  left: -40,   width: 300, height: 300, background: "radial-gradient(ellipse at 40% 50%, var(--pink) 0%, transparent 70%)",   filter: "blur(30px)", transform: "rotate(-15deg)" },
        dur: 8, delay: 0,
    },
    {
        style: { bottom: 100, right: -60, width: 350, height: 350, background: "radial-gradient(ellipse at 60% 50%, var(--cyan) 0%, transparent 70%)",   filter: "blur(40px)", transform: "rotate(10deg)" },
        dur: 11, delay: 2,
    },
    {
        style: { top: "38%", left: "28%", width: 250, height: 250, background: "radial-gradient(ellipse at 50% 50%, var(--yellow) 0%, transparent 70%)", filter: "blur(50px)" },
        dur: 9, delay: 1,
    },
    {
        style: { top: "65%", right: "18%", width: 200, height: 200, background: "radial-gradient(ellipse at 50% 50%, var(--purple) 0%, transparent 70%)", filter: "blur(35px)", transform: "rotate(5deg)" },
        dur: 13, delay: 3,
    },
    {
        style: { top: "8%", left: "58%", width: 180, height: 180, background: "radial-gradient(ellipse at 50% 50%, var(--lime) 0%, transparent 70%)",   filter: "blur(25px)", transform: "rotate(-5deg)" },
        dur: 7, delay: 0.5,
    },
    {
        style: { top: "50%", left: "5%", width: 220, height: 220, background: "radial-gradient(ellipse at 50% 50%, var(--orange) 0%, transparent 70%)", filter: "blur(45px)" },
        dur: 10, delay: 1.8,
    },
];

/* ── Paint drips ─────────────────────────────────────────────────────── */
const DRIPS: { style: CSSProperties; dur: number; delay: number }[] = [
    { style: { left: "8%",  height: 180, width: 6, background: "var(--pink)"   }, dur: 3.5, delay: 0   },
    { style: { left: "25%", height: 120, width: 6, background: "var(--cyan)"   }, dur: 4.1, delay: 0.5 },
    { style: { right:"15%", height: 200, width: 5, background: "var(--yellow)" }, dur: 2.9, delay: 1.0 },
    { style: { right:"35%", height: 90,  width: 6, background: "var(--lime)"   }, dur: 3.8, delay: 1.5 },
    { style: { left: "55%", height: 150, width: 4, background: "var(--purple)" }, dur: 4.6, delay: 0.3 },
    { style: { left: "38%", height: 110, width: 5, background: "var(--orange)" }, dur: 3.2, delay: 0.8 },
    { style: { right:"52%", height: 170, width: 6, background: "var(--red)"    }, dur: 5.0, delay: 2.0 },
    { style: { left: "70%", height: 80,  width: 4, background: "var(--pink)"   }, dur: 3.7, delay: 1.2 },
];

/* ── Component ───────────────────────────────────────────────────────── */
export function GraffitiBackground() {
    const base: CSSProperties = {
        position: "fixed",
        zIndex: 0,
        pointerEvents: "none",
        willChange: "transform",
    };

    return (
        <>
            {/* ── Floating word tags ── */}
            {FLOAT_TAGS.map((tag, i) => (
                <div
                    key={i}
                    style={{
                        ...base,
                        left: tag.left,
                        right: tag.right,
                        top: tag.top,
                        bottom: tag.bottom,
                        transform: `rotate(${tag.rotate}deg)`,
                        opacity: 0.38,
                    }}
                >
                    <span
                        style={{
                            display: "block",
                            fontFamily: "var(--font-tag)",
                            fontSize: tag.size,
                            color: tag.color,
                            animationName: tag.anim,
                            animationDuration: `${tag.dur}s`,
                            animationDelay: `${tag.delay}s`,
                            animationTimingFunction: "ease-in-out",
                            animationIterationCount: "infinite",
                            userSelect: "none",
                        }}
                    >
                        {tag.text}
                    </span>
                </div>
            ))}

            {/* ── Spinning shapes ── */}
            {SHAPES.map((s, i) => (
                <div
                    key={i}
                    style={{
                        ...base,
                        left: s.left,
                        right: s.right,
                        top: s.top,
                        bottom: s.bottom,
                        width: s.size,
                        height: s.size,
                        borderRadius: s.circle ? "50%" : "4px",
                        border: `3px solid ${s.color}`,
                        opacity: 0.22,
                        animationName: s.ccw ? "spinCCW" : "spinCW",
                        animationDuration: `${s.dur}s`,
                        animationDelay: `${s.delay}s`,
                        animationTimingFunction: "linear",
                        animationIterationCount: "infinite",
                    }}
                />
            ))}

            {/* ── Pulsing paint blobs ── */}
            {BLOBS.map((b, i) => (
                <div
                    key={i}
                    style={{
                        ...base,
                        ...b.style,
                        animationName: "pulseSplat",
                        animationDuration: `${b.dur}s`,
                        animationDelay: `${b.delay}s`,
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                    }}
                />
            ))}

            {/* ── Animated drips ── */}
            {DRIPS.map((d, i) => (
                <div
                    key={i}
                    style={{
                        ...base,
                        top: 0,
                        borderRadius: "0 0 50% 50%",
                        transformOrigin: "top center",
                        animationName: "dripPulse",
                        animationDuration: `${d.dur}s`,
                        animationDelay: `${d.delay}s`,
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        ...d.style,
                    }}
                />
            ))}
        </>
    );
}

/* Keep named exports for backward compat with App.tsx */
export const GraffitiDrips = () => null;
export const GraffitiSplatters = () => null;
export const GraffitiStickers = () => null;
