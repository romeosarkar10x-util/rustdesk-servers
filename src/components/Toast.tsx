import { useEffect, useRef } from "react";

interface ToastProps {
    message: string;
    visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (visible) {
            el.classList.remove("toast-hide");
            el.classList.add("toast-show");
        } else {
            el.classList.remove("toast-show");
            el.classList.add("toast-hide");
        }
    }, [visible]);

    return (
        <div
            ref={ref}
            className="fixed bottom-7 left-1/2 font-tag text-sm text-white px-6 py-2.5 rounded pointer-events-none z-50"
            style={{
                background: "var(--ink)",
                border: "3px solid var(--pink)",
                boxShadow: "4px 4px 0 var(--pink)",
                /* start hidden below viewport */
                transform: "translateX(-50%) translateY(80px)",
                opacity: 0,
            }}
        >
            {message}
        </div>
    );
}
