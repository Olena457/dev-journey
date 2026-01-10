
'use client'

import { useState } from 'react';

interface ExpandDescriptionProps {
  text: string;
}

const ExpandDescription = ({ text }: ExpandDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  return (
    <div className="mt-3">
      <p
        className={`text-base leading-normal text-[#a6a6a6] transition-all duration-300 ${
          isExpanded ? 'block' : 'line-clamp-3 overflow-hidden'
        }`}
      >
        {text}
      </p>

      <button
        type="button"
        className="mt-2 text-sm font-semibold  text-[#d200da]  hover:text-[#820f84] cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Less' : 'More...'}
      </button>
    </div>
  );
};

export default ExpandDescription;
