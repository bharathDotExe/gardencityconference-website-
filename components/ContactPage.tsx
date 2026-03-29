
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-primary/40 opacity-90"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 flex flex-col items-start">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Contact <span className="text-accent">Us</span></h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            Have questions about ICISSCT 2026? Reach out to our organizing committee.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Main Content Area */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-24 md:py-32">
                <div className="flex items-center gap-6 mb-16">
                    <div className="w-1.5 h-10 bg-accent rounded-full shrink-0"></div>
                    <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">Conference Leadership</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Convenor */}
                    <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="size-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-3xl">person</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-primary">Dr. Surendar M</h3>
                                <p className="text-accent font-black uppercase tracking-widest text-xs">Convenor</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group/item">
                                <div className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary group-hover/item:border-accent group-hover/item:text-accent transition-colors">
                                    <span className="material-symbols-outlined text-xl">call</span>
                                </div>
                                <span className="text-lg font-bold text-slate-700">+91 9962717222</span>
                            </div>
                            <div className="flex items-center gap-4 group/item">
                                <div className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary group-hover/item:border-accent group-hover/item:text-accent transition-colors">
                                    <span className="material-symbols-outlined text-xl">mail</span>
                                </div>
                                <span className="text-lg font-bold text-slate-700 break-all">surendar.m@gcu.edu.in</span>
                            </div>
                        </div>
                    </div>

                    {/* Co-Convenor */}
                    <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="size-16 rounded-2xl bg-white border-2 border-primary text-primary flex items-center justify-center shadow-sm">
                                <span className="material-symbols-outlined text-3xl">person</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-primary">Dr. Jincy Mathew</h3>
                                <p className="text-accent font-black uppercase tracking-widest text-xs">Co-Convenor</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group/item">
                                <div className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary group-hover/item:border-accent group-hover/item:text-accent transition-colors">
                                    <span className="material-symbols-outlined text-xl">call</span>
                                </div>
                                <span className="text-lg font-bold text-slate-700">+91 9886962700</span>
                            </div>
                            <div className="flex items-center gap-4 group/item">
                                <div className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary group-hover/item:border-accent group-hover/item:text-accent transition-colors">
                                    <span className="material-symbols-outlined text-xl">mail</span>
                                </div>
                                <span className="text-lg font-bold text-slate-700 break-all">jincy.c@gcu.edu.in</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Office Location */}
                <div className="mt-16 p-10 rounded-[40px] bg-primary text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl">
                    <div className="size-20 rounded-3xl bg-white/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-4xl text-accent">location_on</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-black uppercase tracking-widest text-accent mb-2">Office Location</h4>
                        <p className="text-2xl font-bold leading-tight">School of Computational Science & IT</p>
                        <p className="text-gray-300 mt-2">Garden City University, KR Puram, Bengaluru, 560049</p>
                    </div>
                    <div className="md:ml-auto">
                        <a href="https://maps.app.goo.gl/uZTct1CB7gANPRxQA" target="_blank" rel="noopener noreferrer" 
                           className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-2xl font-black uppercase tracking-widest text-sm transition-all inline-block">
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
