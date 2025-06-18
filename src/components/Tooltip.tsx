"use client";
import { useState, useRef, useEffect } from "react";

type TooltipProps = {
  children: React.ReactNode;
  text: string;
  delay?: number;
};

export default function Tooltip({ children, text, delay = 500 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastMove = useRef<number>(Date.now());

  const handleMouseEnter = () => {
    startTooltipDelay();
  };

  const handleMouseLeave = () => {
    cancelTooltip();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    lastMove.current = Date.now();
    setCoords({ x: e.clientX, y: e.clientY });
    cancelTooltip();
    startTooltipDelay();
  };

  const startTooltipDelay = () => {
    timeoutRef.current = setTimeout(() => {
      const now = Date.now();
      const stillDuration = now - lastMove.current;
      if (stillDuration >= delay) {
        setIsVisible(true);
      }
    }, delay);
  };

  const cancelTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      cancelTooltip();
    };
  }, []);

  return (
    <>
      <span
        className="contents"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {children}
      </span>

      {isVisible && (
        <div
          className="fixed z-30 pointer-events-none whitespace-nowrap"
          style={{
            top: `${coords.y-55}px`,
            left: `${coords.x+5}px`,
            transform: "translateX(10%)",
            backgroundColor: "black",
            color: "	rgb(200,200,200)",
            fontSize: "12px",
            padding: "4px 8px",
            //borderRadius: "2px",
            fontFamily: "sans-serif",
          }}
        >
          {text}
        </div>
      )}
    </>
  );
}
