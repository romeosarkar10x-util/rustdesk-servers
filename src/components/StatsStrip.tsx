interface StatsStripProps {
    onlineCount: number;
    totalCount: number;
}

export function StatsStrip({ onlineCount, totalCount }: StatsStripProps) {
    return (
        <div className="flex justify-center gap-6 my-8 flex-wrap">
            {/* Online count */}
            <div
                className="font-tag text-base px-5 py-2 rounded shadow-[3px_3px_0_rgba(0,0,0,0.2)] cursor-default select-none transition-transform duration-200 hover:scale-105"
                style={{ background: "var(--lime)", color: "var(--ink)", transform: "rotate(-1deg)" }}
            >
                <span className="text-2xl mr-1">{onlineCount}</span>
                ONLINE
            </div>

            {/* Total count */}
            <div
                className="font-tag text-base px-5 py-2 rounded shadow-[3px_3px_0_rgba(0,0,0,0.2)] cursor-default select-none transition-transform duration-200 hover:scale-105"
                style={{ background: "var(--cyan)", color: "var(--ink)", transform: "rotate(-1deg)" }}
            >
                <span className="text-2xl mr-1">{totalCount}</span>
                TOTAL
            </div>
        </div>
    );
}
