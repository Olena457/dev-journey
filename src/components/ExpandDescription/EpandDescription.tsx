
'use client';

import { useState, useRef } from 'react';

interface ExpandDescriptionProps {
  text: string;
}

const ExpandDescription = ({ text }: ExpandDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!text) return null;

  return (
    <div className="mt-3">
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded
            ? `${contentRef.current?.scrollHeight || 500}px`
            : '4.5rem',
        }}
        className="overflow-hidden transition-all duration-400 ease-in-out"
      >
        <p className="text-base leading-normal text-[#a6a6a6]">
          {text}
        </p>
      </div>

      <button
        type="button"
        className="mt-2 text-sm font-semibold text-[#a6a6a6] hover:text-[#ffffff] cursor-pointer transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Less' : 'More...'}
      </button>
    </div>
  );
};

export default ExpandDescription;