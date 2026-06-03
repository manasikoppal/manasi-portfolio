"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorAsterisk() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        fontSize: "28px",
        color: "#6355c7",
        fontWeight: 700,
        pointerEvents: "none",
        zIndex: 9999,
        userSelect: "none",
        lineHeight: 1,
        transform: "translate(-50%, -50%)",
      }}
    >
      ✳
    </div>
  );
}
