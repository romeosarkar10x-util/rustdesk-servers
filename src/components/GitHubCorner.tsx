import { PiGithubLogoDuotone } from "react-icons/pi";
import { packageJSON } from "../utils/packageJSON";

export function GitHubCorner() {
    return (
        <a
            href={packageJSON.repository.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="fixed top-4 right-4 z-50 flex items-center justify-center w-11 h-11 rounded transition-all duration-150"
            style={{
                background: "white",
                border: "3px solid var(--ink)",
                boxShadow: "3px 3px 0 var(--ink)",
                color: "var(--ink)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--ink)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translate(-2px, -2px) rotate(-8deg)";
                e.currentTarget.style.boxShadow = "5px 5px 0 var(--ink)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "3px 3px 0 var(--ink)";
            }}
        >
            <PiGithubLogoDuotone size={22} />
        </a>
    );
}
