
import React from 'react';
import { MLConcept } from '../types';

interface Props {
  concept: MLConcept;
}

export const ConceptCard: React.FC<Props> = ({ concept }) => {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className={`${concept.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
        {concept.icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-slate-800">{concept.title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6">
        {concept.description}
      </p>
      <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-500">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1">Simple Analogy</span>
        <p className="text-sm italic text-slate-700">"{concept.analogy}"</p>
      </div>
    </div>
  );
};
