
import React from 'react';
import { IMPORTANT_DATES } from '../constants';

const ImportantDatesPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-primary/40 opacity-90"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 flex flex-col items-start">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Important <span className="text-accent">Dates</span></h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            Mark your calendars for the key milestones of ICISSCT 2026.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Main Content Area */}
            <section className="max-w-[800px] mx-auto px-4 md:px-12 lg:px-10 py-24 md:py-32">
                <div className="relative border-l-2 border-slate-100 space-y-20 pb-10">
                    {IMPORTANT_DATES.map((date, idx) => (
                        <div
                            key={date.id}
                            className="relative pl-12 sm:pl-20 group animate-fade-in-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {/* Timeline Indicator */}
                            <div className={`absolute -left-[11px] top-0 size-5 rounded-full ring-8 ring-white shadow-md z-10 transition-all duration-300 group-hover:scale-125 ${date.isActive ? 'bg-accent' : 'bg-primary'}`}>
                                {date.isActive && <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30"></div>}
                            </div>

                            <div className="p-8 sm:p-10 rounded-[40px] bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-500">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                    <span className={`text-xs font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full border shadow-sm w-fit ${date.isActive ? 'bg-accent text-white border-accent' : 'bg-primary/5 text-primary border-primary/10'}`}>
                                        {date.date}
                                    </span>
                                    {date.isActive && (
                                        <div className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-[0.1em] animate-pulse">
                                            <span className="size-2 rounded-full bg-accent"></span>
                                            Current Milestone
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="size-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined text-3xl">{date.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-primary mb-3 group-hover:text-accent transition-colors leading-tight">{date.title}</h3>
                                        <p className="text-slate-600 font-medium leading-relaxed opacity-80">
                                            {date.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ImportantDatesPage;
