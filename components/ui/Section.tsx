import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bg?: 'white' | 'gray' | 'dark' | 'blue';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white text-gray-800',
    gray: 'bg-gray-50 text-gray-800',
    dark: 'bg-slate-900 text-white',
    blue: 'bg-suprema-blue text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 px-4 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};