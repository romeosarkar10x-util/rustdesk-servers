import { useState } from "react";
import type { Server } from "../data/servers";
import { STRIPE_COLORS } from "../data/servers";

/* ── Icons ──────────────────────────────────────────────────────────────── */
function IconCopy() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
        >
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
    );
}

function IconCheck() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function IconPin() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 flex-shrink-0"
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

/* ── Status badge ───────────────────────────────────────────────────────── */
const STATUS_STYLES: Record<Server["status"], React.CSSProperties> = {
    online: { background: "var(--lime)", color: "var(--ink)" },
    standby: { background: "var(--yellow)", color: "var(--ink)" },
    offline: { background: "var(--red)", color: "white" },
};

/* ── Top stripe colours ─────────────────────────────────────────────────── */
const STRIPE_GRADIENTS: Record<(typeof STRIPE_COLORS)[number], string> = {
    c0: "linear-gradient(90deg, var(--pink), var(--orange))",
    c1: "linear-gradient(90deg, var(--cyan), var(--lime))",
    c2: "linear-gradient(90deg, var(--yellow), var(--orange))",
    c3: "linear-gradient(90deg, var(--purple), var(--pink))",
    c4: "linear-gradient(90deg, var(--lime), var(--cyan))",
};

/* ── Copy button ────────────────────────────────────────────────────────── */
interface CopyBtnProps {
    text: string;
    onCopy: (text: string) => void;
}

function CopyBtn({ text, onCopy }: CopyBtnProps) {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            onCopy(text);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return (
        <button
            onClick={handleClick}
            title="Copy"
            className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0 transition-all duration-100 cursor-pointer"
            style={{
                border: "2px solid var(--ink)",
                background: copied ? "var(--lime)" : "white",
                boxShadow: "2px 2px 0 var(--ink)",
                color: "var(--ink)",
            }}
            onMouseEnter={(e) => {
                if (!copied) {
                    e.currentTarget.style.background = "var(--yellow)";
                    e.currentTarget.style.transform = "translate(-1px, -1px)";
                    e.currentTarget.style.boxShadow = "3px 3px 0 var(--ink)";
                }
            }}
            onMouseLeave={(e) => {
                if (!copied) {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "2px 2px 0 var(--ink)";
                }
            }}
            onMouseDown={(e) => {
                e.currentTarget.style.transform = "translate(1px, 1px)";
                e.currentTarget.style.boxShadow = "0px 0px 0 var(--ink)";
            }}
            onMouseUp={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "2px 2px 0 var(--ink)";
            }}
        >
            {copied ? <IconCheck /> : <IconCopy />}
        </button>
    );
}

/* ── Field row ──────────────────────────────────────────────────────────── */
interface FieldRowProps {
    label: string;
    value: string;
    truncate?: boolean;
    copyable?: boolean;
    onCopy?: (text: string) => void;
}

function FieldRow({ label, value, truncate = false, copyable = false, onCopy }: FieldRowProps) {
    return (
        <div
            className="flex items-center justify-between px-3 py-2 rounded gap-2"
            style={{ background: "rgba(255,255,255,0.5)", border: "2px solid rgba(0,0,0,0.08)" }}
        >
            <span className="font-hand text-base font-bold flex-shrink-0" style={{ color: "var(--ink-soft)" }}>
                {label}
            </span>
            <span
                className="font-mono text-xs font-bold flex items-center gap-1.5 min-w-0"
                style={{ color: "var(--ink)" }}
            >
                {truncate ? (
                    <span className="max-w-36 overflow-hidden text-ellipsis whitespace-nowrap" title={value}>
                        {value}
                    </span>
                ) : (
                    <span>{value}</span>
                )}
                {copyable && onCopy && <CopyBtn text={value} onCopy={onCopy} />}
            </span>
        </div>
    );
}

/* ── Server Card ────────────────────────────────────────────────────────── */
interface ServerCardProps {
    server: Server;
    index: number;
    colorIndex: number;
    onCopy: (text: string) => void;
}

export function ServerCard({ server, index, colorIndex, onCopy }: ServerCardProps) {
    const stripeKey = STRIPE_COLORS[colorIndex % STRIPE_COLORS.length];
    const showTape = index % 3 === 0;

    return (
        <div
            className="card-animate relative overflow-hidden rounded-md"
            style={{
                background: "var(--card-bg)",
                border: "3px solid var(--ink)",
                boxShadow: "6px 6px 0 var(--ink)",
                animationDelay: `${index * 0.07}s`,
                transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-3px, -3px) rotate(-0.3deg)";
                e.currentTarget.style.boxShadow = "9px 9px 0 var(--ink)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "6px 6px 0 var(--ink)";
            }}
        >
            {/* Tape decorations on every 3rd card */}
            {showTape && (
                <>
                    <div
                        className="absolute top-[-6px] left-[15px] w-20 h-6 z-10 pointer-events-none rounded-sm"
                        style={{
                            background: "rgba(255,233,100,0.6)",
                            border: "1px solid rgba(0,0,0,0.1)",
                            transform: "rotate(-8deg)",
                        }}
                    />
                    <div
                        className="absolute top-[-6px] right-[15px] w-20 h-6 z-10 pointer-events-none rounded-sm"
                        style={{
                            background: "rgba(255,233,100,0.6)",
                            border: "1px solid rgba(0,0,0,0.1)",
                            transform: "rotate(5deg)",
                        }}
                    />
                </>
            )}

            {/* Coloured top stripe */}
            <div className="h-2 w-full" style={{ background: STRIPE_GRADIENTS[stripeKey] }} />

            {/* Card body */}
            <div className="p-5">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <div className="font-tag text-xl" style={{ color: "var(--ink)" }}>
                            {server.name}
                        </div>
                        <div
                            className="font-hand text-base mt-0.5 flex items-center gap-1"
                            style={{ color: "var(--ink-soft)" }}
                        >
                            <IconPin />
                            {server.location}
                        </div>
                    </div>

                    {/* Status badge */}
                    <div
                        className="font-tag text-xs px-2.5 py-1 rounded flex-shrink-0 whitespace-nowrap uppercase tracking-wider"
                        style={{
                            ...STATUS_STYLES[server.status],
                            border: "2px solid var(--ink)",
                            boxShadow: "2px 2px 0 var(--ink)",
                        }}
                    >
                        {server.status}
                    </div>
                </div>

                {/* Fields */}
                <div className="flex flex-col gap-2">
                    <FieldRow label="IP" value={server.ip} copyable onCopy={onCopy} />
                    <FieldRow label="Key" value={server.key} truncate copyable onCopy={onCopy} />
                </div>
            </div>
        </div>
    );
}
