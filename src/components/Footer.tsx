export function Footer() {
    return (
        <footer
            className="relative z-10 text-center px-6 pb-10 font-hand text-lg"
            style={{ color: "var(--ink-soft)" }}
        >
            made with spray cans &amp; code &middot; powered by{" "}
            <a
                href="https://rustdesk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
                style={{ color: "var(--pink)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline wavy")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
                RustDesk
            </a>
        </footer>
    );
}
