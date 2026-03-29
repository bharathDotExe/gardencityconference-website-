
import React from 'react';
import { REGISTRATION_FEES, BANK_DETAILS } from '../constants';

const RegistrationPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/80 to-primary/40 opacity-90"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 flex flex-col items-start">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Conference <span className="text-accent">Registration</span></h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            Secure your participation in ICISSCT 2026 and join our global academic community.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Main Content Area */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Fee Table */}
                    <div className="lg:col-span-8 animate-fade-in-up">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-1.5 h-10 bg-accent rounded-full shrink-0"></div>
                            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">Registration Fees</h2>
                        </div>

                        <div className="overflow-x-auto custom-scrollbar rounded-[32px] border border-slate-100 shadow-xl shadow-primary/5">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Category</th>
                                        <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Indian Delegates</th>
                                        <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Foreign Delegates</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {REGISTRATION_FEES.map((fee, idx) => (
                                        <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors group">
                                            <td className="px-8 py-6 text-primary font-bold group-hover:text-accent transition-colors">{fee.category}</td>
                                            <td className="px-8 py-6 text-slate-700 font-extrabold">{fee.local}</td>
                                            <td className="px-8 py-6 text-slate-700 font-extrabold">{fee.foreign}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-100 italic text-slate-500 text-sm font-medium">
                            * The registration fee includes conference kit, lunch, refreshments, and admission to all technical sessions and keynote talks.
                        </div>

                        {/* Bank Details section */}
                        <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-primary/5 flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="flex-1">
                                <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-accent">account_balance</span>
                                    Bank Details (For Registration Payment)
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4 border-b border-slate-100 pb-4">
                                        <span className="font-bold text-slate-500 w-1/3">Account Name:</span>
                                        <span className="font-black text-primary">{BANK_DETAILS.accountName}</span>
                                    </div>
                                    <div className="flex gap-4 border-b border-slate-100 pb-4">
                                        <span className="font-bold text-slate-500 w-1/3">Bank:</span>
                                        <span className="font-black text-primary">{BANK_DETAILS.bank}</span>
                                    </div>
                                    <div className="flex gap-4 border-b border-slate-100 pb-4">
                                        <span className="font-bold text-slate-500 w-1/3">Account Number:</span>
                                        <span className="font-black text-primary tracking-widest">{BANK_DETAILS.accountNumber}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-bold text-slate-500 w-1/3">IFSC Code:</span>
                                        <span className="font-black text-primary tracking-widest">{BANK_DETAILS.ifscCode}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Payment QR Code Section */}
                            <div className="flex bg-slate-50 flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 shadow-sm shrink-0 w-full md:w-auto">
                                <h4 className="text-sm font-black text-primary tracking-widest uppercase mb-4 text-center">Scan to Pay</h4>
                                <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-inner mb-3">
                                    <img src="/images/payment_qr.png" alt="Payment QR Code" className="w-40 h-40 object-contain" />
                                </div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center max-w-[160px]">
                                    Supports all UPI Apps
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Sidebar */}
                    <aside className="lg:col-span-4 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-accent text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group flex flex-col items-center text-center">
                            <div className="absolute top-0 right-0 p-8 opacity-20 -rotate-12 translate-x-4 -translate-y-4 pointer-events-none">
                                <span className="material-symbols-outlined text-9xl">how_to_reg</span>
                            </div>
                            <h3 className="text-3xl font-black mb-6 relative z-10">Register Now</h3>
                            
                            {/* Prominent QR Code */}
                            <div className="bg-white p-3 rounded-2xl shadow-xl mb-6 relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                                <img src="/images/registration_qr.png" alt="Registration QR Code" className="w-56 h-56 object-contain" />
                            </div>
                            
                            <p className="text-white mb-8 relative z-10 font-black text-xl leading-snug tracking-wide max-w-[250px]">
                                Scan here to register and submit the paper
                            </p>
                            
                            <a 
                                href="https://forms.gle/5YbJ8gxecHiHdPpb8" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-4 px-6 bg-white text-accent hover:bg-primary hover:text-white font-black rounded-2xl transition-all shadow-xl uppercase tracking-widest relative z-10 text-sm md:text-sm flex flex-col items-center justify-center gap-2"
                            >
                                <span>Click here to register</span>
                                <span>and submit paper</span>
                            </a>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                            <h3 className="text-xl font-black text-primary mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent">info</span>
                                Important Note
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                At least one author of each accepted paper must register at the full rate to include the paper in the conference proceedings.
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default RegistrationPage;
