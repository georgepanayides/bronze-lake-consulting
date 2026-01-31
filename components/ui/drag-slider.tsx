"use client";

import { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface DragSliderProps {
  before: React.ReactNode;
  after: React.ReactNode;
  className?: string;
  initialPosition?: number; // 0 to 100
}

export function DragSlider({ before, after, className, initialPosition = 50 }: DragSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX: number;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = event.clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-hidden cursor-ew-resize select-none touch-none", 
        className
      )}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* 
        LAYER 1: BEFORE (Background) 
        Occupies full container.
      */}
      <div className="absolute inset-0 w-full h-full">
        {before}
      </div>

      {/* 
        LAYER 2: AFTER (Foreground)
        Clipped using inset. 
        inset(top right bottom left) -> we clip from the right based on slider position.
      */}
      <div 
        className="absolute inset-0 w-full h-full z-20 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="absolute inset-0 w-full h-full">
            {after}
        </div>
      </div>

      {/* 
        LAYER 3: HANDLE 
      */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-30 shadow-[0_0_20px_rgba(0,0,0,0.2)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-bl-bronze-50">
          <MoveHorizontal className="w-5 h-5 text-bl-bronze-75" />
        </div>
      </div>
    </div>
  );
}
