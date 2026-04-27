import type { Server } from "../data/servers";
import { SERVERS } from "../data/servers";
import { ServerCard } from "./ServerCard";

interface ServerGridProps {
    servers: Server[];
    onCopy: (text: string) => void;
}

export function ServerGrid({ servers, onCopy }: ServerGridProps) {
    if (servers.length === 0) {
        return (
            <section aria-label="Server list" className="text-center py-20 px-5">
                <p className="font-tag text-2xl mb-2" style={{ color: "var(--ink-soft)" }}>
                    NOTHING HERE...
                </p>
                <span className="font-hand text-xl" style={{ color: "var(--wall-shadow)" }}>
                    try a different search or filter
                </span>
            </section>
        );
    }

    return (
        <section aria-label="Server list" className="grid gap-5 pb-20" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))" }}>
            {servers.map((server, i) => (
                <ServerCard
                    key={server.ip}
                    server={server}
                    index={i}
                    colorIndex={SERVERS.indexOf(server)}
                    onCopy={onCopy}
                />
            ))}
        </section>
    );
}
