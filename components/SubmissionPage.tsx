
import React from 'react';
import { SUBMISSION_GUIDELINES } from '../constants';

const SubmissionPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-primary/40 opacity-90"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 flex flex-col items-start">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Paper <span className="text-accent">Submission</span></h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            Find everything you need to prepare and submit your research to ICISSCT 2026.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Main Content Area */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-8 space-y-20">
                        {/* Step-by-Step Guide */}
                        <div className="animate-fade-in-up">
                            <h2 className="text-3xl md:text-4xl font-black text-primary mb-12 tracking-tight flex items-center gap-4">
                                <span className="w-1.5 h-10 bg-accent rounded-full"></span>
                                Submission Steps
                            </h2>
                            <div className="space-y-6">
                                {SUBMISSION_GUIDELINES.steps.map((step, idx) => (
                                    <div key={idx} className="flex gap-6 p-8 rounded-[32px] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                                        <div className="size-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center font-black text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                            {idx + 1}
                                        </div>
                                        <p className="text-slate-700 font-bold leading-relaxed pt-2">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Plagiarism & Guidelines */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <h3 className="text-2xl font-black text-primary mb-10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent text-3xl">policy</span>
                                Policies & Ethics
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {SUBMISSION_GUIDELINES.policies.map((policy, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-red-50/30 border border-red-100 flex gap-4 items-start">
                                        <span className="material-symbols-outlined text-red-500 mt-1">warning</span>
                                        <p className="text-slate-700 text-sm font-bold leading-relaxed">{policy}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {/* Portal Button */}
                        <div className="bg-primary text-white p-10 rounded-[40px] shadow-2xl">
                            <h3 className="text-2xl font-black mb-6">Submission Portal</h3>
                            <p className="text-gray-400 mb-8 font-medium">Use the Google Form portal for all your paper submissions.</p>
                            <a href={SUBMISSION_GUIDELINES.link} target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 bg-accent hover:bg-accent-hover text-white font-black rounded-xl transition-all shadow-lg uppercase tracking-widest">
                                Go to Submission Portal
                            </a>
                        </div>

                        {/* Downloads */}
                        <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                            <h3 className="text-xl font-black text-primary mb-8">Templates</h3>
                            <div className="space-y-4">
                                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-accent group transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary group-hover:text-accent font-black">description</span>
                                        <span className="text-sm font-black text-primary">MS Word Template</span>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-accent">download</span>
                                </button>
                                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-accent group transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary group-hover:text-accent font-black">terminal</span>
                                        <span className="text-sm font-black text-primary">LaTeX Template</span>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-accent">download</span>
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default SubmissionPage;
