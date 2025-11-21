
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  const uniqueId = React.useId();
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle */}
      <circle cx="100" cy="100" r="95" fill="#FDC500" stroke="#00296B" strokeWidth="8" />
      
      {/* Curved Text Path */}
      <defs>
        <path id={`curve-${uniqueId}`} d="M 35 100 A 65 65 0 0 1 165 100" />
      </defs>
      <text width="200" fontSize="22" fontFamily="sans-serif" fontWeight="900" fill="#00296B" textAnchor="middle" letterSpacing="2">
        <textPath href={`#curve-${uniqueId}`} startOffset="50%">
          TRUCKTRACKR
        </textPath>
      </text>

      {/* Truck Icon */}
      <g transform="translate(40, 55) scale(0.7)">
        {/* Body Outline */}
        <path d="M10 20 L130 20 L130 10 L160 40 L160 100 L10 100 Z" fill="none" stroke="#00296B" strokeWidth="10" strokeLinejoin="round" />
        
        {/* Body Fill */}
        <path d="M10 20 L130 20 L130 10 L160 40 L160 100 L10 100 Z" fill="#FDC500" />

        {/* Stripe */}
        <line x1="10" y1="60" x2="160" y2="60" stroke="#00296B" strokeWidth="6" />

        {/* Window */}
        <rect x="40" y="35" width="50" height="20" fill="#00296B" rx="2" />
        
        {/* Front Window */}
        <path d="M135 25 L155 45 L135 45 Z" fill="#00296B" />

        {/* Wheels */}
        <circle cx="45" cy="100" r="15" fill="#FDC500" stroke="#00296B" strokeWidth="8" />
        <circle cx="125" cy="100" r="15" fill="#FDC500" stroke="#00296B" strokeWidth="8" />
      </g>
    </svg>
  );
};
