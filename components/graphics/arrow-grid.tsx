import { useId } from "react";

type ArrowGridProps = {
  id?: string;
};

export function ArrowGrid({ id }: ArrowGridProps) {
  const reactId = useId();
  const safeId = (id ?? `arrow-grid-${reactId}`).replace(/:/g, "");
  const patternId = `${safeId}-pattern`;
  const maskId = `${safeId}-mask`;
  const gradientId = `${safeId}-grad`;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Define the single arrow pattern */}
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          {/* Custom thick arrow scaled for 120x120 grid */}
          <g transform="translate(25, 20) scale(4)">
            <path
              d="M19.07 4.93L17.66 14.83L15.54 12.71L7.05 21.19L2.81 16.95L11.29 8.46L9.17 6.34Z"
              fill="currentColor"
              opacity={0.5}
            />
          </g>
        </pattern>

        {/* Define the mask to show only top-right area */}
        <mask id={maskId}>
            {/* Radial gradient starting from top-right corner */}
            <radialGradient id={gradientId} cx="100%" cy="0%" r="70%" fx="100%" fy="0%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="50%" stopColor="white" stopOpacity="0.5" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        </mask>
      </defs>

      {/* Fill the rect with the arrow pattern, masked by the gradient */}
      <rect 
        width="100%" 
        height="100%" 
        fill={`url(#${patternId})`} 
        mask={`url(#${maskId})`} 
        className="text-bl-bronze-25 opacity-20" // Control color and base opacity here
      />
    </svg>
  );
}
