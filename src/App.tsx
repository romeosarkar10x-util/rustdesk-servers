import { useState, useCallback, useRef } from "react";
import { SERVERS } from "./data/servers";
import type { FilterValue } from "./components/FilterBar";
import { GraffitiBackground } from "./components/GraffitiBackground";
import { GitHubCorner } from "./components/GitHubCorner";
import { Header } from "./components/Header";
import { StatsStrip } from "./components/StatsStrip";
import { SearchBar } from "./components/SearchBar";
import { FilterBar } from "./components/FilterBar";
import { ServerGrid } from "./components/ServerGrid";
import { Toast } from "./components/Toast";
import { Footer } from "./components/Footer";

function App() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<FilterValue>("all");
    const [toastVisible, setToastVisible] = useState(false);
    const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    /* Derived filtered list */
    const filteredServers = SERVERS.filter((s) => {
        const matchFilter = filter === "all" || s.status === filter;
        const q = search.toLowerCase();
        const matchSearch =
            !q ||
            s.name.toLowerCase().includes(q) ||
            s.location.toLowerCase().includes(q) ||
            s.ip.includes(q) ||
            s.key.toLowerCase().includes(q);
        return matchFilter && matchSearch;
    });

    const onlineCount = SERVERS.filter((s) => s.status === "online").length;

    /* Show toast on copy */
    const handleCopy = useCallback(() => {
        setToastVisible(true);
        if (toastTimer.current) clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToastVisible(false), 2000);
    }, []);

    return (
        <>
            {/* ── Decorative background layer ── */}
            <GraffitiBackground />
            <GitHubCorner />

            {/* ── Main content ── */}
            <main className="relative z-10 w-full max-w-5xl mx-auto px-6">
                <Header />
                <StatsStrip onlineCount={onlineCount} totalCount={SERVERS.length} />
                <SearchBar value={search} onChange={setSearch} />
                <FilterBar active={filter} onChange={setFilter} />
                <ServerGrid servers={filteredServers} onCopy={handleCopy} />
            </main>

            <Footer />

            {/* ── Toast notification ── */}
            <Toast message="COPIED!" visible={toastVisible} />
        </>
    );
}

export default App;
