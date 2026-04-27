import { useEffect, useRef } from "react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    /* Global keyboard shortcuts: "/" to focus, Escape to clear */
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "/" && document.activeElement !== inputRef.current) {
                e.preventDefault();
                inputRef.current?.focus();
            }
            if (e.key === "Escape") {
                inputRef.current?.blur();
                onChange("");
            }
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [onChange]);

    return (
        <div className="relative max-w-xl mx-auto mb-6">
            {/* Search icon */}
            <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                style={{ color: "var(--ink-soft)" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
                ref={inputRef}
                id="searchInput"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="search servers..."
                autoComplete="off"
                spellCheck={false}
                className="w-full py-3 pl-12 pr-12 text-xl rounded outline-none transition-all duration-200"
                style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "3px solid var(--ink)",
                    boxShadow: "4px 4px 0 var(--ink)",
                    fontFamily: "var(--font-hand)",
                    color: "var(--ink)",
                    fontWeight: "bold",
                }}
                onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--pink)";
                    e.currentTarget.style.boxShadow = "4px 4px 0 var(--pink)";
                    e.currentTarget.style.transform = "translate(-1px, -1px)";
                }}
                onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--ink)";
                    e.currentTarget.style.boxShadow = "4px 4px 0 var(--ink)";
                    e.currentTarget.style.transform = "";
                }}
            />

            {/* Clear button */}
            {value.length > 0 && (
                <button
                    onClick={() => {
                        onChange("");
                        inputRef.current?.focus();
                    }}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white text-base font-bold transition-transform duration-150 hover:scale-110 hover:rotate-12 active:scale-95"
                    style={{
                        background: "var(--red)",
                        border: "2px solid var(--ink)",
                        boxShadow: "2px 2px 0 var(--ink)",
                        fontFamily: "var(--font-tag)",
                    }}
                >
                    ×
                </button>
            )}
        </div>
    );
}
