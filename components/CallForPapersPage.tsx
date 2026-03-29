
import React from 'react';
import { ABOUT_CONFERENCE } from '../constants';

const CallForPapersPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-primary/40 opacity-90"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 flex flex-col items-start">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Call for <span className="text-accent">Papers</span></h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            Submit your original research and join a global dialogue on intelligent systems and sustainable technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Main Content Area */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-8 space-y-20">
                        {/* Overview */}
                        <div className="animate-fade-in-up">
                            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 tracking-tight flex items-center gap-4">
                                <span className="w-1.5 h-10 bg-accent rounded-full"></span>
                                Conference Theme
                            </h2>
                            <p className="text-xl text-slate-700 leading-relaxed font-medium">
                                ICISSCT 2026 invites original, unpublished research contributions that explore the intersection of <strong>Intelligent Systems</strong> and <strong>Secure Computing</strong>. We encourage submissions that address sustainable solutions to complex global challenges.
                            </p>
                        </div>

                        {/* Topics of Interest */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <h3 className="text-2xl font-black text-primary mb-10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent text-3xl">lightbulb</span>
                                Topics of Interest
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {ABOUT_CONFERENCE.focusAreas.map((area, idx) => (
                                    <div key={idx} className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-700 hover:border-accent hover:text-accent transition-all cursor-default shadow-sm">
                                        {area}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submission Guidelines Summary */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <h3 className="text-2xl font-black text-primary mb-10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent text-3xl">task</span>
                                Submission Guidelines
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                    <span className="material-symbols-outlined text-accent font-black">arrow_forward</span>
                                    <p className="text-slate-700 font-medium">Papers must be submitted in PDF format via the official conference submission portal.</p>
                                </li>
                                <li className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                    <span className="material-symbols-outlined text-accent font-black">arrow_forward</span>
                                    <p className="text-slate-700 font-medium">Minimum 6 pages and maximum 8 pages including references.</p>
                                </li>
                                <li className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                    <span className="material-symbols-outlined text-accent font-black">arrow_forward</span>
                                    <p className="text-slate-700 font-medium">All submissions undergo a rigorous double-blind peer-review process.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="bg-primary text-white p-8 rounded-[32px] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 -rotate-12">
                                <span className="material-symbols-outlined text-8xl">upload_file</span>
                            </div>
                            <h3 className="text-2xl font-black mb-6 relative z-10">Ready to Submit?</h3>
                            <p className="text-gray-300 mb-8 relative z-10 font-medium">Ensure your paper follows the conference template before uploading.</p>
                            <button className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-black rounded-xl transition-all shadow-lg shadow-accent/20 uppercase tracking-widest relative z-10">
                                Submit Portal
                            </button>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                            <h3 className="text-xl font-black text-primary mb-6">Review Process</h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                Every paper will be reviewed by at least three members of the international technical committee. Selection is based on originality, technical soundness, and relevance to the conference theme.
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default CallForPapersPage;
