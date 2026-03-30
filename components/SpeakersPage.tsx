
import React from 'react';
import { SPEAKERS } from '../constants';

const SpeakersPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-primary/40 opacity-90"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 flex flex-col items-start">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Conference <span className="text-accent">Speakers</span></h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            Global experts sharing insights on the future of intelligent systems and secure computing.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Main Content Area */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-24 md:py-32">

                {/* Keynote Speakers */}
                <div className="mb-32">
                    <div className="flex items-center gap-6 mb-16 animate-fade-in-up">
                        <div className="w-1.5 h-12 bg-accent rounded-full shrink-0"></div>
                        <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Keynote Speakers</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {SPEAKERS.keynote.map((speaker, idx) => (
                            <div
                                key={idx}
                                className="group relative flex flex-col md:flex-row gap-8 p-10 rounded-[40px] bg-white border border-slate-100 shadow-2xl shadow-primary/5 hover-lift animate-fade-in-up"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="w-full md:w-48 h-64 md:h-48 rounded-[32px] overflow-hidden shrink-0 shadow-lg relative bg-slate-100">
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-2xl font-black text-primary mb-2 group-hover:text-accent transition-colors">{speaker.name}</h3>
                                    <div className="text-sm font-black text-accent uppercase tracking-widest mb-4">{speaker.designation}</div>
                                    <div className="text-sm font-bold text-slate-500 mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">account_balance</span>
                                        {speaker.institution}
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 font-medium opacity-80 italic">
                                        {speaker.bio}
                                    </p>
                                </div>
                                {/* Decoration */}
                                <div className="absolute -top-4 -right-4 size-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Invited Speakers */}
                <div className="mt-40">
                    <div className="flex items-center gap-6 mb-16 animate-fade-in-up">
                        <div className="w-1.5 h-12 bg-accent rounded-full shrink-0"></div>
                        <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Invited Experts</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SPEAKERS.invited.map((speaker: any, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                {speaker.image ? (
                                    <img src={speaker.image} alt={speaker.name} className="size-20 rounded-2xl object-cover mb-6 shadow-md" />
                                ) : (
                                    <div className="size-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                        <span className="text-2xl font-black">{speaker.name.charAt(0)}</span>
                                    </div>
                                )}
                                <h3 className="text-xl font-black text-primary mb-2 group-hover:text-accent transition-colors">{speaker.name}</h3>
                                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{speaker.designation}</div>
                                <div className="text-sm font-bold text-slate-500">{speaker.institution}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SpeakersPage;
