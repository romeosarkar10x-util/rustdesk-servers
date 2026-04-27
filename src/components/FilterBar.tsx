export type FilterValue = "all" | "online" | "standby" | "offline";

interface FilterBarProps {
    active: FilterValue;
    onChange: (value: FilterValue) => void;
}

const FILTERS: { label: string; value: FilterValue }[] = [
    { label: "ALL", value: "all" },
    { label: "ONLINE", value: "online" },
    { label: "STANDBY", value: "standby" },
    { label: "OFFLINE", value: "offline" },
];

export function FilterBar({ active, onChange }: FilterBarProps) {
    return (
        <div className="flex gap-3 justify-center mb-8 flex-wrap">
            {FILTERS.map(({ label, value }) => {
                const isActive = active === value;
                return (
                    <button
                        key={value}
                        onClick={() => onChange(value)}
                        className="font-tag text-sm px-5 py-2 rounded border-3 cursor-pointer transition-all duration-150"
                        style={
                            isActive
                                ? {
                                      background: "var(--pink)",
                                      color: "white",
                                      border: "3px solid var(--ink)",
                                      boxShadow: "4px 4px 0 var(--ink)",
                                      transform: "translate(-1px, -1px)",
                                  }
                                : {
                                      background: "white",
                                      color: "var(--ink)",
                                      border: "3px solid var(--ink)",
                                      boxShadow: "3px 3px 0 var(--ink)",
                                  }
                        }
                        onMouseEnter={(e) => {
                            if (!isActive) {
                                e.currentTarget.style.transform = "translate(-2px, -2px)";
                                e.currentTarget.style.boxShadow = "5px 5px 0 var(--ink)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isActive) {
                                e.currentTarget.style.transform = "";
                                e.currentTarget.style.boxShadow = "3px 3px 0 var(--ink)";
                            }
                        }}
                        onMouseDown={(e) => {
                            e.currentTarget.style.transform = "translate(1px, 1px)";
                            e.currentTarget.style.boxShadow = "1px 1px 0 var(--ink)";
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.transform = "";
                            e.currentTarget.style.boxShadow = isActive ? "4px 4px 0 var(--ink)" : "3px 3px 0 var(--ink)";
                        }}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}
