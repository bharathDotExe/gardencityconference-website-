
import React from 'react';
import { VENUE_INFO } from '../constants';

const VenuePage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-primary/40 opacity-90"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 flex flex-col items-start">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Conference <span className="text-accent">Venue</span></h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            Join us at Garden City University, a lush green campus in the heart of India's technology hub, Bengaluru.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Main Content Area */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    <div className="lg:col-span-8 space-y-20 animate-fade-in-up">
                        {/* Map Integration */}
                        <div className="rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3887.825123456789!2d77.728!3d13.018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116512345678%3A0x123456789abcdef!2sGarden%20City%20University!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="GCU Map"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-md p-8 text-white">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-accent text-3xl">location_on</span>
                                    <div>
                                        <h3 className="text-xl font-black mb-1">{VENUE_INFO.name}</h3>
                                        <p className="text-sm text-gray-300 font-medium">{VENUE_INFO.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Travel Directions */}
                        <div>
                            <h2 className="text-3xl font-black text-primary mb-10 flex items-center gap-4">
                                <span className="w-1.5 h-10 bg-accent rounded-full"></span>
                                How to Reach
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {VENUE_INFO.travel.map((info, idx) => (
                                    <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex gap-6 items-start hover:bg-white hover:shadow-xl transition-all duration-300">
                                        <span className="material-symbols-outlined text-accent text-2xl mt-1">directions_bus</span>
                                        <p className="text-slate-700 font-bold leading-relaxed">{info}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent text-3xl">hotel</span>
                                Accommodation
                            </h3>
                            <p className="text-slate-600 font-medium leading-relaxed mb-6">
                                Bengaluru offers a wide range of stay options, from budget hotels to 5-star luxury resorts near the campus.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm font-bold text-primary">
                                    <span className="size-2 rounded-full bg-accent"></span>
                                    GCU Guest House (Prior booking required)
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold text-primary">
                                    <span className="size-2 rounded-full bg-accent"></span>
                                    Hotels on Old Madras Road
                                </div>
                            </div>
                            <button className="w-full mt-10 py-4 bg-primary text-white font-black rounded-xl hover:bg-primary-light transition-all uppercase tracking-widest shadow-lg">
                                Travel Desk Assistance
                            </button>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default VenuePage;
