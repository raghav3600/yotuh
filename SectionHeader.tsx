import React from 'react';

interface Props {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<Props> = ({ number, title, subtitle, className = "", dark = false }) => {
  return (
    <div className={`mb-10 ${className}`}>
      <div className="flex items-center gap-3 mb-2">
        {number && (
          <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
            dark ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
          }`}>
            {number}
          </span>
        )}
        <h2 className={`text-3xl font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-lg ml-1 ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};