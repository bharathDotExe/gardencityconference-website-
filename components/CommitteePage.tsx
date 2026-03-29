
import React from 'react';
import { COMMITTEE } from '../constants';

const getInitials = (name: string) => {
    return name
        .split(' ')
        .filter(n => n.length > 0)
        .map(n => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
};

interface HierarchyCardProps { member: any; index: number; }
interface MemberCardProps { member: any; }

// 1. Hierarchy Card Style (Chief Patron, Patron, Conference Chair)
const HierarchyCard = ({ member, index }: HierarchyCardProps) => {
    return (
        <div className="group relative flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_50px_rgba(74,14,14,0.08)] border border-gray-100 hover-lift animate-fade-in-up">
            {/* Numbered Indicator */}
            <div className="absolute top-6 right-8 text-5xl font-black text-primary/5 select-none transition-colors group-hover:text-accent/10">
                {String(index + 1).padStart(2, '0')}
            </div>

            {/* Avatar */}
            <div className={`size-32 md:size-44 rounded-full bg-primary/2 flex items-center justify-center text-primary text-4xl font-black border-4 border-primary/10 group-hover:border-accent/40 group-hover:shadow-2xl transition-all duration-700 shadow-xl overflow-hidden mb-6 md:mb-0 ${member.image ? 'animate-floating' : ''}`}>
                {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                ) : (
                    getInitials(member.name)
                )}
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left pt-2">
                <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-6 h-[2px] bg-accent rounded-full"></span>
                    <span className="text-accent text-xs font-black uppercase tracking-widest">{member.designation}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-primary mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                    {member.name}
                </h3>
                <p className="text-slate-600 text-base md:text-lg font-medium opacity-80 flex items-center justify-center md:justify-start gap-2">
                    <span className="material-symbols-outlined text-xl opacity-60">school</span>
                    {member.institution}
                </p>
            </div>

            {/* Subtle Divider */}
            <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
        </div>
    );
};

// 2. Glass Accent Card Style (Program Chair)
const GlassCard = ({ member }: MemberCardProps) => {
    return (
        <div className="group relative glass-card p-8 rounded-[20px] border-l-4 border-l-accent hover-lift animate-fade-in-up">
            <div className="flex flex-col gap-6">
                <div className="size-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary text-xl font-black border border-primary/5 group-hover:bg-accent group-hover:text-white transition-all duration-300 overflow-hidden">
                    {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                        getInitials(member.name)
                    )}
                </div>
                <div>
                    <h4 className="text-xl font-black text-primary mb-2 group-hover:text-accent transition-colors duration-300">{member.name}</h4>
                    <p className="text-accent text-[11px] font-black uppercase tracking-[0.15em] mb-4 bg-accent/5 w-fit px-3 py-1 rounded-full border border-accent/10">
                        {member.designation}
                    </p>
                    <p className="text-slate-700 text-sm font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-base opacity-40">apartment</span>
                        {member.institution}
                    </p>
                </div>
            </div>
        </div>
    );
};

// 3. Clean Grid Card Style (Organizing / Technical Committee)
const GridCard = ({ member }: MemberCardProps) => {
    return (
        <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover-lift animate-fade-in-up">
            <div className="flex items-center gap-5">
                <div className="size-14 rounded-full bg-slate-50 flex items-center justify-center text-primary text-lg font-black border border-slate-100 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300 overflow-hidden">
                    {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                        getInitials(member.name)
                    )}
                </div>
                <div className="min-w-0 pr-2">
                    <h4 className="text-base font-black text-primary leading-tight truncate mb-1 group-hover:text-accent transition-colors duration-300">
                        {member.name}
                    </h4>
                    <p className="text-accent text-[10px] font-black uppercase tracking-wider mb-1 truncate">
                        {member.designation}
                    </p>
                    <p className="text-slate-500 text-[12px] font-medium truncate opacity-70">
                        {member.institution}
                    </p>
                </div>
            </div>
        </div>
    );
};

const CommitteePage: React.FC = () => {
    return (
        <div className="bg-slate-50/30 min-h-screen">
            <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-20 lg:py-32">
                {/* Header Section */}
                <div className="flex flex-col mb-24 relative animate-fade-in">
                    <div className="inline-flex items-center gap-3 text-accent text-sm font-black uppercase tracking-[0.2em] mb-6">
                        <span className="w-12 h-[2px] bg-accent rounded-full"></span>
                        GCU Conference 2026
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-primary leading-[1] tracking-tighter mb-8">
                        The <span className="text-accent">Committee</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-700 max-w-4xl font-medium leading-[1.6] opacity-90 border-l-4 border-primary/10 pl-8">
                        A diverse collective of global thought leaders, academic pioneers, and industry visionaries
                        collaborating to shape the sustainable technological landscape of tomorrow.
                    </p>
                </div>

                <div className="space-y-40">
                    {COMMITTEE.map((section, sectionIdx) => {
                        // Determine render style based on section title
                        const isHierarchy = ['Chief Patron', 'Patron', 'Conference Chair'].includes(section.title);
                        const isGlass = section.title === 'Program Chair';

                        return (
                            <section key={section.title} className="relative">
                                {/* Section Header */}
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
                                    <div className="relative">
                                        <span className="absolute -top-10 left-0 text-[100px] font-black text-primary/[0.03] select-none -z-10 tracking-tighter">
                                            {String(sectionIdx + 1).padStart(2, '0')}
                                        </span>
                                        <h2 className="text-3xl md:text-5xl font-black text-primary flex items-center gap-4">
                                            {section.title}
                                        </h2>
                                        <div className="w-20 h-1.5 bg-accent mt-4 rounded-full"></div>
                                    </div>
                                    <p className="text-slate-500 font-bold text-sm uppercase tracking-widest opacity-60">
                                        {section.members.length} member{section.members.length > 1 ? 's' : ''}
                                    </p>
                                </div>

                                {/* Section Content */}
                                <div className={`grid gap-8 ${isHierarchy
                                    ? 'grid-cols-1 max-w-4xl mx-auto'
                                    : isGlass
                                        ? 'grid-cols-1 md:grid-cols-2'
                                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                    }`}>
                                    {section.members.map((member, mIdx) => {
                                        if (isHierarchy) return <HierarchyCard key={`${section.title}-${mIdx}`} member={member} index={mIdx} />;
                                        if (isGlass) return <GlassCard key={`${section.title}-${mIdx}`} member={member} />;
                                        return <GridCard key={`${section.title}-${mIdx}`} member={member} />;
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>

            {/* Bottom CTA or Decorative Section */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 pb-32">
                <div className="bg-primary p-12 md:p-20 rounded-[40px] text-center text-white relative overflow-hidden group shadow-[0_30px_60px_rgba(74,14,14,0.3)]">
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span className="material-symbols-outlined text-[80px] md:text-[120px] text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 scale-150">groups</span>

                    <h3 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Join our growing ecosystem</h3>
                    <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed font-medium">
                        Become part of a network that spans over 15 countries and involves the brightest minds in sustainability and technology.
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all transform hover:scale-105 relative z-10 shadow-xl">
                        Register Collaboration <span className="material-symbols-outlined">rocket_launch</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CommitteePage;
