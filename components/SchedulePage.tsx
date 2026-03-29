
import React from 'react';
import { SCHEDULE } from '../constants';

const SchedulePage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-primary/40 opacity-90"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 flex flex-col items-start">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Conference <span className="text-accent">Schedule</span></h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            Plan your conference experience with our detailed day-wise agenda.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Main Content Area */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-24 md:py-32">
                <div className="space-y-32">
                    {SCHEDULE.map((day, dayIdx) => (
                        <div key={dayIdx} className="animate-fade-in-up" style={{ animationDelay: `${dayIdx * 0.2}s` }}>
                            <div className="flex items-center gap-6 mb-16">
                                <div className="size-16 rounded-2xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
                                    <span className="material-symbols-outlined text-3xl">calendar_today</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">{day.day}</h2>
                                    <div className="text-sm font-black text-accent uppercase tracking-widest mt-1">Main Academic Agenda</div>
                                </div>
                            </div>

                            <div className="relative ml-8 sm:ml-12 border-l-2 border-slate-100 space-y-12 pb-8">
                                {day.events.map((event, eventIdx) => (
                                    <div key={eventIdx} className="relative pl-12 sm:pl-16 group">
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-6 size-4 rounded-full bg-white border-4 border-slate-100 group-hover:border-accent group-hover:scale-125 transition-all duration-300 shadow-sm z-10"></div>

                                        <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-500">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
                                                <div className="px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-wider w-fit">
                                                    {event.time}
                                                </div>
                                                <div className="hidden md:block w-px h-4 bg-slate-200"></div>
                                                <div className="text-xs font-black text-slate-400 uppercase tracking-widest bg-white px-3 py-1 rounded-lg border border-slate-100 shadow-sm">
                                                    Session Type: Academic
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-accent transition-colors">{event.title}</h3>
                                            <p className="text-slate-600 font-medium leading-relaxed opacity-80">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SchedulePage;
