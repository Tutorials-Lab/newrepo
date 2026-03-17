
import React, { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { ConceptCard } from './components/ConceptCard';
import { ChatInterface } from './components/ChatInterface';
import { MLConcept } from './types';
import { gemini } from './services/geminiService';

const CONCEPTS: MLConcept[] = [
  {
    id: 'supervised',
    title: 'Supervised Learning',
    description: 'Learning with a teacher. The computer is shown millions of examples with correct answers (labels) until it learns to identify them on its own.',
    analogy: 'Showing a child a flashcard with a picture of a cat and saying "This is a cat."',
    icon: '👨‍🏫',
    color: 'bg-emerald-500'
  },
  {
    id: 'unsupervised',
    title: 'Unsupervised Learning',
    description: 'The computer finds patterns on its own without being told what they are. It clusters things together based on similarities.',
    analogy: 'Giving a child a pile of mixed legos and letting them group them by color or size without help.',
    icon: '🧩',
    color: 'bg-amber-500'
  },
  {
    id: 'reinforcement',
    title: 'Reinforcement Learning',
    description: 'Learning through trial and error. The computer gets a reward for doing something right and a penalty for doing something wrong.',
    analogy: 'Training a dog to sit: give it a treat when it sits, and no treat when it jumps.',
    icon: '🎮',
    color: 'bg-rose-500'
  }
];

const App: React.FC = () => {
  const [summary, setSummary] = useState("Machine Learning is the science of getting computers to act without being explicitly programmed.");

  useEffect(() => {
    const fetchSummary = async () => {
      const s = await gemini.getSummary("Machine Learning");
      if (s) setSummary(s);
    };
    fetchSummary();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wide uppercase mb-6 animate-fade-in">
            Artificial Intelligence 101
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
            Machine Learning <br />
            <span className="gradient-text">Made Simple.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            {summary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#what-is-ml" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-indigo-500/20 transition-all hover:-translate-y-1">
              Start Learning
            </a>
            <a href="#ask-gemini" className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-bold transition-all">
              Chat with AI Tutor
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="what-is-ml" className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full -z-10"></div>
            <img 
              src="https://picsum.photos/seed/ml/800/600" 
              alt="Visualizing ML" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
              <p className="text-sm font-medium text-slate-800">"Instead of writing 100 rules, we write 1 rule that learns from data."</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-800">What is Machine Learning, really?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">It's about Patterns</h4>
                  <p className="text-slate-600 text-sm">Traditional coding is like a recipe (steps). ML is like showing a chef a thousand meals and letting them figure out the ingredients.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">It Needs Data</h4>
                  <p className="text-slate-600 text-sm">Data is the "food" for ML. The more high-quality examples you give it, the smarter it becomes at recognizing patterns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">It Predicts</h4>
                  <p className="text-slate-600 text-sm">Once trained, an ML model looks at new data it has never seen before and makes an educated guess (prediction).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section id="core-types" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-slate-800">The Three Main Ways Machines Learn</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Just like humans, computers can learn in different ways depending on the goal.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {CONCEPTS.map(concept => (
              <ConceptCard key={concept.id} concept={concept} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[40px] mx-6 my-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" strokeWidth="0.1" />
             <path d="M0 80 C 30 20 60 20 100 80" fill="none" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Want a custom explanation?</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Every person learns differently. Use our AI tutor below to get an explanation tailored specifically to your interests—whether you love sports, music, or video games!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => {
                document.getElementById('ask-gemini')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-indigo-500 hover:bg-indigo-400 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Try it Now
            </button>
          </div>
        </div>
      </section>

      {/* Chat Bot Interface */}
      <ChatInterface />

      {/* Final Call to Action */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-slate-800">Ready to build the future?</h2>
          <p className="text-slate-600 mb-10">Machine learning is behind self-driving cars, Netflix recommendations, and even this website's AI. Keep exploring!</p>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">90%</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Accuracy</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">AI Tutor</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">∞</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Possibilities</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
