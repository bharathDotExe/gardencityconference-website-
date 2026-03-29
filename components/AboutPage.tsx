
import React from 'react';
import { ABOUT_CONFERENCE, ABOUT_UNIVERSITY, ABOUT_DEPARTMENT } from '../constants';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
                {/* Subtle Gradient/Texture Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-primary/40 opacity-90"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 flex flex-col items-start">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">About the <span className="text-accent">Conference</span></h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            A premier gathering of researchers, academics, and industry leaders exploring the vanguard of intelligent systems and secure computing.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Conference Overview Section */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-8 animate-fade-in-up">
                        <div className="flex items-start gap-8">
                            <div className="hidden md:block w-1.5 h-32 bg-accent rounded-full shrink-0 mt-2"></div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">
                                    {ABOUT_CONFERENCE.title}
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-xl text-slate-700 leading-relaxed font-medium whitespace-pre-line">
                                        {ABOUT_CONFERENCE.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 🔹 Conference Objectives Section */}
                        <div className="mt-20">
                            <h3 className="text-2xl font-black text-primary mb-10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent text-3xl">target</span>
                                Conference Objectives
                            </h3>
                            <ul className="grid grid-cols-1 gap-6">
                                {ABOUT_CONFERENCE.objectives.map((obj, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                                        <span className="material-symbols-outlined text-accent bg-accent/10 size-8 rounded-full flex items-center justify-center text-lg shrink-0 mt-1">check</span>
                                        <p className="text-slate-700 font-bold leading-relaxed">{obj}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        {/* 🔹 Key Focus Areas Section */}
                        <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <h3 className="text-xl font-black text-primary mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent text-2xl">grid_view</span>
                                Key Focus Areas
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {ABOUT_CONFERENCE.focusAreas.map((area, idx) => (
                                    <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-xs font-black text-primary uppercase tracking-wider hover:border-accent hover:text-accent transition-all cursor-default">
                                        <span className="size-2 rounded-full bg-accent"></span>
                                        {area}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🔹 Conference Statistics Section */}
                <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    {ABOUT_CONFERENCE.stats.map((stat, idx) => (
                        <div key={idx} className="p-8 rounded-[24px] bg-white border border-slate-100 shadow-lg shadow-primary/5 flex flex-col items-center text-center group hover-lift">
                            <div className="size-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <span className="material-symbols-outlined text-[32px]">{stat.icon}</span>
                            </div>
                            <div className="text-4xl font-black text-primary mb-2 tracking-tighter group-hover:text-accent transition-colors">{stat.value}</div>
                            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🔹 About Garden City University Section */}
            <section className="bg-slate-50 py-32">
                <div className="max-w-[800px] mx-auto px-4 text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 text-accent text-sm font-black uppercase tracking-[0.2em] mb-10">
                        <span className="w-8 h-[2px] bg-accent rounded-full"></span>
                        The Institution
                        <span className="w-8 h-[2px] bg-accent rounded-full"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 tracking-tight">
                        {ABOUT_UNIVERSITY.title}
                    </h2>
                    <p className="text-xl text-slate-700 leading-[1.8] font-medium opacity-90 mx-auto whitespace-pre-line text-left">
                        {ABOUT_UNIVERSITY.description}
                    </p>
                </div>
            </section>
            
            {/* 🔹 About Department of Computer Science Section */}
            <section className="bg-white py-32">
                <div className="max-w-[800px] mx-auto px-4 text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 text-accent text-sm font-black uppercase tracking-[0.2em] mb-10">
                        <span className="w-8 h-[2px] bg-accent rounded-full"></span>
                        The Department
                        <span className="w-8 h-[2px] bg-accent rounded-full"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 tracking-tight">
                        {ABOUT_DEPARTMENT.title}
                    </h2>
                    <p className="text-xl text-slate-700 leading-[1.8] font-medium opacity-90 mx-auto whitespace-pre-line text-left">
                        {ABOUT_DEPARTMENT.description}
                    </p>
                    <div className="mt-16 flex justify-center gap-6">
                        <div className="size-3 h-3 rounded-full bg-accent/20"></div>
                        <div className="size-3 h-3 rounded-full bg-accent/40"></div>
                        <div className="size-3 h-3 rounded-full bg-accent/20"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
