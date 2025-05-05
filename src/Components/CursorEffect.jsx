import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const CursorEffect = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleCursorMove = (e) => {
      gsap.to(cursorRef.current, {
        opacity: 1,
        x: e.x - 10,
        y: e.y - 10,
        duration: 1.2,
        ease: "back.out(1.7)",
        boxShadow: `0 0 40px 10px royalblue`,
      });
    };

    window.addEventListener("mousemove", handleCursorMove);

    // To avoid memory leaks
    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-4 h-4 bg-blue-400/60 z-50 rounded-full absolute pointer-events-none"
    />
  );
};
