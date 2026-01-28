import React from 'react';

interface Props {
  label: string;
  value: string;
  highlight?: boolean;
}

export const MetricCard: React.FC<Props> = ({ label, value, highlight = false }) => {
  return (
    <div className={`p-6 rounded-3xl transition-all duration-300 ${
      highlight 
        ? 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-xl shadow-indigo-200' 
        : 'bg-white text-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50'
    }`}>
      <div className="text-3xl font-extrabold mb-1 tracking-tight">{value}</div>
      <div className={`text-xs font-bold uppercase tracking-wider ${highlight ? 'text-indigo-100' : 'text-slate-400'}`}>
        {label}
      </div>
    </div>
  );
};