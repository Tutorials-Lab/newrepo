
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 glass-morphism border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">ML Made <span className="text-indigo-600">Simple</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#what-is-ml" className="hover:text-indigo-600 transition-colors">What is it?</a>
            <a href="#core-types" className="hover:text-indigo-600 transition-colors">How it works</a>
            <a href="#ask-gemini" className="hover:text-indigo-600 transition-colors">Ask AI</a>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">Made with ❤️ for curious minds.</p>
          <div className="text-xs">
            Powered by Gemini 3 Flash & Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
};
